// =======================================================
// BASE DE DATOS DE PRODUCTOS Y CONFIGURACIÓN DEL CATÁLOGO
// =======================================================

const DEFAULT_STORE_CONFIG = {
    phone: "584122959390", // Número WhatsApp con código de país (Venezuela +58)
    storeName: "N&A aroma studio",
    tagline: "Inspiraciones exclusivas & fragancias de alta fijación",
    currency: "$"
};

const INITIAL_PERFUMES = [
    {
        id: "p_black_addiction",
        name: "Black Addiction - Black Opium Parfum (Yves Saint Laurent)",
        category: "Mujer",
        price: 4.50,
        priceBs: null,
        image: "imagenes/black_addiction_clean.png",
        description: "Inspiración del icónico Black Opium de Yves Saint Laurent. Aroma seductor con notas de café negro, flores blancas y vainilla dulce.",
        status: "disponible",
        badge: "Más Vendido"
    },
    {
        id: "p_crystalline",
        name: "Crystalline - Good Girl Sparkling Ice (Carolina Herrera)",
        category: "Mujer",
        price: 6.50,
        priceBs: null,
        image: "imagenes/crystalline_good_girl_clean.png",
        description: "Edición especial inspirada en Good Girl Sparkling Ice de Carolina Herrera. Elegante frasco en forma de tacón con aroma floral y dulce cautivador.",
        status: "disponible",
        badge: "Nuevo"
    },
    {
        id: "p_galaxy_turquoise",
        name: "Galaxy Turquoise - Dylan Turquoise (Versace Fem)",
        category: "Mujer",
        price: 5.50,
        priceBs: null,
        image: "imagenes/galaxy_turquoise_clean.png",
        description: "Inspiración de Dylan Turquoise de Versace. Aroma cítrico y vibrante con notas de mandarina italiana, maderas doradas y almizcle.",
        status: "disponible",
        badge: "Oferta"
    },
    {
        id: "p_flame_passion",
        name: "Flame Passion - Fame (Paco Rabanne Fem)",
        category: "Mujer",
        price: 5.00,
        priceBs: null,
        image: "imagenes/flame_passion_fame_clean.png",
        description: "Inspiración de la fragancia Fame de Paco Rabanne en su diseño icónico de robot plateado. Exquisita combinación de mango jugoso, jazmín delicado e incienso cremoso.",
        status: "disponible",
        badge: "🔥 Top Ventas"
    }
];

const CATALOGO_VERSION = "2.1";

// Función utilitaria para cargar productos con persistencia local
function loadCatalogData() {
    let savedPerfumes = null;
    let savedConfig = null;

    try {
        const savedVersion = localStorage.getItem('catalogo_version');
        if (savedVersion !== CATALOGO_VERSION) {
            // Si la versión en el servidor es más reciente, actualizar la memoria del teléfono automáticamente
            localStorage.setItem('catalogo_version', CATALOGO_VERSION);
            localStorage.setItem('perfumes_catalogo_db', JSON.stringify(INITIAL_PERFUMES));
            return {
                perfumes: INITIAL_PERFUMES,
                config: DEFAULT_STORE_CONFIG
            };
        }

        const rawPerfumes = localStorage.getItem('perfumes_catalogo_db');
        if (rawPerfumes) {
            savedPerfumes = JSON.parse(rawPerfumes);
        }
    } catch (e) {
        console.warn("No se pudo leer del almacenamiento local", e);
    }

    try {
        const rawConfig = localStorage.getItem('catalogo_config');
        if (rawConfig) {
            savedConfig = JSON.parse(rawConfig);
            if (savedConfig && (savedConfig.storeName === "Tu Tienda de Perfumes" || !savedConfig.storeName)) {
                savedConfig.storeName = "N&A aroma studio";
                savedConfig.tagline = "Inspiraciones exclusivas & fragancias de alta fijación";
                localStorage.setItem('catalogo_config', JSON.stringify(savedConfig));
            }
        }
    } catch (e) {
        console.warn("No se pudo leer la configuración local", e);
    }

    return {
        perfumes: (savedPerfumes && Array.isArray(savedPerfumes)) ? savedPerfumes : INITIAL_PERFUMES,
        config: savedConfig ? { ...DEFAULT_STORE_CONFIG, ...savedConfig } : DEFAULT_STORE_CONFIG
    };
}

// Función utilitaria para guardar productos en almacenamiento local
function saveCatalogData(perfumes, config) {
    if (perfumes) {
        localStorage.setItem('perfumes_catalogo_db', JSON.stringify(perfumes));
    }
    if (config) {
        localStorage.setItem('catalogo_config', JSON.stringify(config));
    }
}
