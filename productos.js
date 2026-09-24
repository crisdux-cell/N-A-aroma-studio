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
        id: "p_lady_gold",
        name: "Lady Gold - Lady Million (Paco Rabanne)",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/lady_gold.jpg",
        description: "Inspiración del icónico diamante dorado Lady Million de Paco Rabanne. Fragancia deslumbrante y seductora con notas de flor de azahar, jazmín sambac, frambuesa jugosa, miel blanca y pachulí.",
        status: "disponible",
        badge: "🔥 Top Ventas"
    },
    {
        id: "p_golden_flame",
        name: "Golden Flame - Fame (Paco Rabanne)",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/golden_flame.jpg",
        description: "Inspiración de Fame de Paco Rabanne en su diseño de robot femenino con gafas oscuras y vestido metálico dorado. Exquisita fusión parisina de mango jugoso, jazmín puro e incienso cremoso.",
        status: "disponible",
        badge: "✨ Nuevo"
    },
    {
        id: "p_crystalline_herrera",
        name: "Crystalline - Good Girl (Carolina Herrera)",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/crystalline_herrera.jpg",
        description: "Edición especial Crystalline Herrera inspirada en Good Girl de Carolina Herrera. Elegante tacón de cristal degradado verde a fucsia con tacón aguja dorado. Cautivador aroma de nardos, jazmín, haba tonka y cacao.",
        status: "disponible",
        badge: "✨ Nuevo"
    },
    {
        id: "p_golf_club",
        name: "Golf Club - Polo Ralph Lauren",
        category: "Hombre",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/golf_club.jpg",
        description: "Inspiración de la elegancia clásica de Polo Ralph Lauren. Distinguido frasco blanco con detalles y silueta dorada de golfista. Frescura sofisticada con notas cítricas, madera noble y fondo aromático limpio.",
        status: "disponible",
        badge: "✨ Nuevo"
    },
    {
        id: "p_vernasa_galaxy_blue",
        name: "Vernasa Galaxy Blue - Dylan Blue pour Femme (Versace)",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/vernasa_galaxy_blue.jpg",
        description: "Inspiración de Versace Dylan Blue pour Femme en majestuoso frasco ánfora azul zafiro con detalles dorados. Homenaje a la feminidad con manzana granny smith, grosellas negras, jazmín y pachulí.",
        status: "disponible",
        badge: "🔥 Más Vendido"
    },
    {
        id: "p_vigorous_flame",
        name: "Vigorous Flame - Versace Eros Flame",
        category: "Hombre",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/vigorous_flame.jpg",
        description: "Inspiración del ardiente Versace Eros Flame con relieves griegos en rojo pasión. Contraste apasionado y vibrante entre cítricos italianos, pimienta negra, romero, rosas y maderas cálidas.",
        status: "disponible",
        badge: "🔥 Top Ventas"
    },
    {
        id: "p_versace_dylan_purple",
        name: "Versace Dylan Purple - Dylan Purple (Versace)",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/versace_dylan_purple.jpg",
        description: "Inspiración de Versace Dylan Purple con su cautivador frasco ánfora en tono violeta brillante y oro. Una explosión floral y frutal luminosa con pera jugosa, naranja amarga, fresia y cedro elegante.",
        status: "disponible",
        badge: "✨ Nuevo"
    },
    {
        id: "p_sexy_girl_red",
        name: "Sexy Girl Red - Good Girl (Carolina Herrera)",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/sexy_girl_red.jpg",
        description: "Inspiración del icónico frasco de tacón rojo Sexy Girl (Good Girl Carolina Herrera). Fragancia sensual y apasionada con notas florales orientales, frutos rojos y haba tonka.",
        status: "disponible",
        badge: "✨ Nuevo"
    },
    {
        id: "p_hayati_black",
        name: "Hayati - Lattafa / Attar Collection",
        category: "Hombre",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/hayati_black.jpg",
        description: "Fragancia árabe de lujo Hayati. Elegante botella negra con detalles dorados. Exquisita estela dulce y amaderada con notas de frambuesa, piña, grosellas negras, vainilla y almizcle blanco.",
        status: "disponible",
        badge: "🔥 Árabe Exclusivo"
    },
    {
        id: "p_sparkle_sexy_girl",
        name: "Sparkle Sexy Girl - Good Girl Midnight (Carolina Herrera)",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/sparkle_sexy_girl_purple.jpg",
        description: "Inspiración del tacón morado escarchado Sparkle Sexy Girl (Good Girl Midnight). Deslumbrante aroma nocturno con flores oscuras, pachulí, jazmín sambac y praliné.",
        status: "disponible",
        badge: "✨ Nuevo"
    },
    {
        id: "p_robot_revolution",
        name: "Robot Revolution - Phantom (Paco Rabanne)",
        category: "Hombre",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/robot_revolution.jpg",
        description: "Inspiración de Phantom de Paco Rabanne con diseño futurista de robot. Aroma moderno y energizante con lavanda cremosa, cáscara de limón italiano, pachulí terroso y vainilla.",
        status: "disponible",
        badge: "🔥 Top Ventas"
    },
    {
        id: "p_sanctity_of_royal",
        name: "Sanctity of Royal - K by Dolce & Gabbana",
        category: "Hombre",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/sanctity_of_royal.jpg",
        description: "Inspiración de K by Dolce & Gabbana. Majestuoso frasco coronado con notas amaderadas, cítricos del mediterráneo y cedro noble.",
        status: "disponible",
        badge: "✨ Nuevo"
    },
    {
        id: "p_versace_eros_energy",
        name: "Versace Eros Energy - Versace Eros pour Homme",
        category: "Hombre",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/versace_eros_energy.jpg",
        description: "Inspiración de Versace Eros Energy con el icónico relieve dorado de Medusa. Fragancia electrizante y cítrica con bergamota italiana, lima ácida, ámbar y pachulí.",
        status: "disponible",
        badge: "🔥 Top Ventas"
    },
    {
        id: "p_black_addiction",
        name: "Black Addiction - Black Opium Parfum (Yves Saint Laurent)",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/black_addiction_studio.jpg",
        description: "Inspiración del icónico Black Opium de Yves Saint Laurent. Aroma seductor con notas de café negro, flores blancas y vainilla dulce.",
        status: "disponible",
        badge: "🔥 Más Vendido"
    },
    {
        id: "p_sexy_girl_blush",
        name: "Sexy Girl Blush - Good Girl Blush by Carolina Herrera",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/sexy_girl_blush_studio.jpg",
        description: "Inspiración de Good Girl Blush de Carolina Herrera. Elegante tacón rosa pastel con tacón aguja dorado, aroma romántico de vainilla y peonía.",
        status: "disponible",
        badge: "✨ Nuevo"
    },
    {
        id: "p_very_sexy_girl",
        name: "Very Sexy Girl - Very Good Girl by Carolina Herrera",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/very_sexy_girl.png",
        description: "Inspiración de Very Good Girl de Carolina Herrera. Exquisito diseño de tacón rojo con notas florales y frutales cautivadoras.",
        status: "disponible",
        badge: "✨ Nuevo"
    },
    {
        id: "p_919_sexy_women",
        name: "919 Sexy - 212 Sexy by Carolina Herrera Fem",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/sexy_919_women.png",
        description: "Inspiración del seductor 212 Sexy de Carolina Herrera para dama. Fragancia magnética con notas florales, orientales y un toque dulce irresistible.",
        status: "disponible",
        badge: "Oferta"
    },
    {
        id: "p_crystalline",
        name: "Crystalline - Good Girl Sparkling Ice (Carolina Herrera)",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/crystalline_good_girl_clean.png",
        description: "Edición especial inspirada en Good Girl Sparkling Ice de Carolina Herrera. Elegante frasco en forma de tacón con aroma floral y dulce cautivador.",
        status: "disponible",
        badge: "Nuevo"
    },
    {
        id: "p_galaxy_turquoise",
        name: "Galaxy Turquoise - Dylan Turquoise (Versace Fem)",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/galaxy_turquoise_clean.png",
        description: "Inspiración de Dylan Turquoise de Versace. Aroma cítrico y vibrante con notas de mandarina italiana, maderas doradas y almizcle.",
        status: "disponible",
        badge: "Oferta"
    },
    {
        id: "p_flame_passion",
        name: "Flame Passion - Fame (Paco Rabanne Fem)",
        category: "Mujer",
        price: 12.00,
        priceBs: 14700,
        image: "imagenes/flame_passion_fame_clean.png",
        description: "Inspiración de la fragancia Fame de Paco Rabanne en su diseño icónico de robot plateado. Exquisita combinación de mango jugoso, jazmín delicado e incienso cremoso.",
        status: "disponible",
        badge: "🔥 Top Ventas"
    }
];

const CATALOGO_VERSION = "2.6";

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
