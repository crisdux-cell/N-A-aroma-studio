// =======================================================
// CONFIGURACIÓN Y SINCRONIZACIÓN EN LA NUBE (FIREBASE)
// N&A aroma studio - Sincronización en Tiempo Real
// =======================================================

// Clave local para recordar la configuración
const FIREBASE_CONFIG_STORAGE_KEY = 'na_aroma_firebase_config';

// CONFIGURACIÓN DE FIREBASE
// Aquí puedes colocar tu configuración de Firebase para que quede fija para todos tus clientes:
const DEFAULT_FIREBASE_CONFIG = {
    databaseURL: "https://aroma-studio-95ae8-default-rtdb.firebaseio.com",
    projectId: "aroma-studio-95ae8"
};

let firebaseDbInstance = null;
let isFirebaseInitialized = false;

// Obtener la configuración activa (del archivo o del navegador)
function getActiveFirebaseConfig() {
    try {
        const local = localStorage.getItem(FIREBASE_CONFIG_STORAGE_KEY);
        if (local) {
            const parsed = JSON.parse(local);
            if (parsed && (parsed.databaseURL || parsed.projectId)) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn("No se pudo leer la configuración local de Firebase", e);
    }
    return DEFAULT_FIREBASE_CONFIG;
}

// Guardar configuración activa
function saveActiveFirebaseConfig(config) {
    try {
        localStorage.setItem(FIREBASE_CONFIG_STORAGE_KEY, JSON.stringify(config));
    } catch (e) {
        console.error("Error guardando configuración local de Firebase", e);
    }
}

// Comprobar si Firebase está listo
function isFirebaseConfigured() {
    const config = getActiveFirebaseConfig();
    return Boolean(config && (config.databaseURL || config.projectId));
}

// Inicializar la conexión con Firebase
function initFirebaseApp() {
    if (isFirebaseInitialized && firebaseDbInstance) {
        return firebaseDbInstance;
    }

    if (typeof firebase === 'undefined') {
        console.warn("El SDK de Firebase no está cargado.");
        return null;
    }

    const config = getActiveFirebaseConfig();
    if (!config || (!config.databaseURL && !config.projectId)) {
        return null; // Aún no está configurado
    }

    try {
        let app;
        if (!firebase.apps || firebase.apps.length === 0) {
            app = firebase.initializeApp(config);
        } else {
            app = firebase.app();
        }

        firebaseDbInstance = firebase.database(app);
        isFirebaseInitialized = true;
        console.log("☁️ Conectado exitosamente a Firebase Realtime Database");
        return firebaseDbInstance;
    } catch (err) {
        console.error("Error inicializando Firebase:", err);
        return null;
    }
}

// Escuchar cambios en tiempo real (para clientes y admin)
function listenToCloudCatalog(onSuccess, onError) {
    const db = initFirebaseApp();
    if (!db) return null;

    try {
        const catalogRef = db.ref('catalogo');
        catalogRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data && data.perfumes && Array.isArray(data.perfumes)) {
                // Guardar copia local de respaldo
                saveCatalogData(data.perfumes, data.config || DEFAULT_STORE_CONFIG);
                if (typeof onSuccess === 'function') {
                    onSuccess(data);
                }
            }
        }, (err) => {
            console.error("Error en escucha de Firebase:", err);
            if (typeof onError === 'function') onError(err);
        });
        return catalogRef;
    } catch (e) {
        console.error("Error conectando escucha en Firebase:", e);
        return null;
    }
}

// Guardar catálogo en la nube
async function saveCatalogToCloud(perfumes, config) {
    // Siempre respaldar localmente primero
    saveCatalogData(perfumes, config);

    const db = initFirebaseApp();
    if (!db) {
        return false; // Guardado solo localmente
    }

    try {
        const payload = {
            perfumes: perfumes,
            config: config || DEFAULT_STORE_CONFIG,
            updatedAt: new Date().toISOString()
        };

        await db.ref('catalogo').set(payload);
        console.log("☁️ Catálogo sincronizado en la nube con éxito.");
        return true;
    } catch (err) {
        console.error("Error guardando en la nube de Firebase:", err);
        throw err;
    }
}
