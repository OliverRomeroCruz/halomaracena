const HALO_DATA = {
    hero: {
        brand: "HALO",
        statement: "TU COMIDA FAVORITA SIN SALIR DE CASA.",
        address: "C/ SANTA BRÍGIDA, 2 — MARACENA (GRANADA)",
        phone1: "858 83 14 38",
        phone2: "603 72 70 08",
        logoImg: "ASSETS/logo_take_away.jpg"
    },
    // SOLO LOS 3 VÍDEOS EN LOOP
    carouselBurgers: [
        {
            id: "halo-deluxe",
            title: "HALO DELUXE SMASH",
            tag: "Nº 1 MÁS VENDIDA",
            price: "8.50€",
            desc: "Doble smash de ternera madurada con costra Maillard, doble queso cheddar fundido, bacon ahumado crujiente y cebolla caramelizada en pan brioche artesanal.",
            video: "ASSETS/loops/burger_loop_2_lam.mp4",
            poster: "ASSETS/carne2.jpg"
        },
        {
            id: "bacon-monster",
            title: "BACON MONSTER SMASH",
            tag: "TRIPLE CARNE & EXTRA BACON",
            price: "8.00€",
            desc: "Carne smash seleccionada 100% vacuno, cuádruple ración de bacon crujiente a la plancha, queso fundente, tomate fresco, lechuga y salsa de la casa.",
            video: "ASSETS/loops/burger_loop_1_lam.mp4",
            poster: "ASSETS/carne3.jpg"
        },
        {
            id: "crispy-chicken",
            title: "CRISPY CHICKEN SUPREME",
            tag: "POLLO ULTRA CRUJIENTE",
            price: "8.00€",
            desc: "Contramuslo de pollo macerado 24h con rebozado extra crujiente dorado, queso gouda fundido, lechuga romana, tomate de la huerta y salsa especial.",
            video: "ASSETS/loops/burger_loop_3_lam.mp4",
            poster: "ASSETS/carne.jpg"
        }
    ],

    // CARTA COMPLETA OFICIAL CON TODOS LOS PRECIOS
    carta: {
        burgersNote: "Todas llevan tomate, lechuga y cebolla",
        burgers: [
            { name: "Ternera", normal: "7.00€", quesoHuevo: "7.50€", completo: "8.00€" },
            { name: "Crispy Chicken", normal: "7.00€", quesoHuevo: "7.50€", completo: "8.00€" },
            { name: "Pollo", normal: "6.00€", quesoHuevo: "6.50€", completo: "7.00€" },
            { name: "Cerdo", normal: "6.00€", quesoHuevo: "6.50€", completo: "7.00€" }
        ],
        haloSupreme: {
            name: "HALO SUPREME",
            price: "8.50€",
            desc: "Doble smash de ternera, doble queso, bacon y cebolla caramelizada.",
            badge: "ESPECIALIDAD DE LA CASA"
        },
        bocadillosNote: "Todas llevan tomate, lechuga y cebolla",
        bocadillos: [
            { name: "Pechuga de Pollo", normal: "6.00€", quesoHuevo: "6.50€", completo: "7.00€" },
            { name: "Lomo", normal: "5.50€", quesoHuevo: "6.00€", completo: "6.50€" },
            { name: "San Francisco", normal: "6.00€", quesoHuevo: "6.50€", completo: "7.00€" },
            { name: "Bacon", normal: "6.00€", quesoHuevo: "6.50€", completo: "7.00€" },
            { name: "Pechuga Empanada", normal: "6.00€", quesoHuevo: "6.50€", completo: "7.00€" },
            { name: "Pepito de Salchicha", normal: "5.50€", quesoHuevo: "6.00€", completo: "6.50€" }
        ],
        sandwiches: [
            { name: "Sandwich Vegetal", price: "5.50€", desc: "Lechuga, tomate, espárragos, huevo cocido y mayonesa suave" },
            { name: "Sandwich de Pollo", price: "5.00€", desc: "Pechuga a la plancha, lechuga fresca, tomate y salsa ligera" },
            { name: "Sandwich Mixto", price: "4.50€", desc: "Jamón cocido extra y queso cheddar fundido en pan tostado" }
        ],
        salchichas: [
            { name: "Frankfurt", price: "4.50€", desc: "Salchicha gigante a la plancha con cebolla crujiente y salsas" },
            { name: "Salchipapa", price: "5.50€", desc: "Base de patatas fritas caseras cubiertas de salchichas troceadas y salsas" }
        ],
        entrantes: [
            { name: "Alitas Caseras (5 uds)", price: "6.00€", desc: "Maceradas 24h y doradas al punto crujiente" },
            { name: "Croquetas Caseras (5 uds)", price: "6.00€", desc: "Cremosas por dentro y rebozado fino crujiente" },
            { name: "Nuggets de Pollo (5 uds)", price: "6.00€", desc: "100% pechuga de pollo empanada" },
            { name: "Tequeños de Queso (5 uds)", price: "6.00€", desc: "Rellenos de abundante queso derretido venezolano" }
        ],
        patatas: [
            { name: "Cheese Fries", price: "4.00€", desc: "Patatas con crema de queso fundido caliente y bacon crujiente" },
            { name: "Patatas Fritas Caseras", price: "3.00€", desc: "Corte rústico artesanal recién fritas" }
        ],
        bebidas: [
            { name: "Refrescos (Coca-Cola, Fanta, Aquarius)", price: "1.50€" },
            { name: "Agua Mineral", price: "1.00€" },
            { name: "Cerveza Alhambra 33cl", price: "1.50€" },
            { name: "Tercio Alhambra Especial", price: "2.50€" },
            { name: "Cerveza Alhambra 500ml", price: "1.70€" },
            { name: "Cerveza Alhambra 1925 Lata", price: "2.00€" },
            { name: "Bebida Energética Red Bull", price: "2.00€" }
        ],
        menuPromo: {
            title: "HAZLO MENÚ POR +3.50€",
            desc: "Añade Patatas Fritas Caseras + Bebida o Refresco a cualquiera de tus platos."
        },
        extras: [
            { name: "Extra Queso Fundido", price: "+0.50€" },
            { name: "Extra Huevo a la Plancha", price: "+0.50€" },
            { name: "Extra Cebolla Caramelizada", price: "+1.00€" },
            { name: "Extra de Salsas Caseras", price: "+1.00€" }
        ],
        mesPromo: {
            title: "PREGUNTA POR NUESTRA BURGER DEL MES",
            desc: "Cada mes creamos una receta smash exclusiva de edición limitada fuera de carta. ¡Pregúntanos al llamar!"
        }
    },

    // SECCIONES DE FOTOGRAFÍAS REALES
    sections: [
        {
            id: "carnes",
            title: "SMASH & VACA MADURADA",
            subtitle: "100% CARNE SELECCIONADA, COSTRA MAILLARD Y MÁXIMA JUGOSIDAD",
            gallery: [
                { src: "ASSETS/carne.jpg", title: "Carne Madurada Seleccionada", desc: "Picado diario de cortes nobles de vaca para una textura y sabor inigualables." },
                { src: "ASSETS/carne2.jpg", title: "Doble Cheddar Fundido", desc: "Queso cheddar inglés que funde directamente sobre la carne en la plancha." },
                { src: "ASSETS/carne3.jpg", title: "Costra Maillard Perfecta", desc: "El aplastado a alta temperatura sella los jugos y crea el crujiente característico." }
            ]
        },
        {
            id: "alitas-section",
            title: "ALITAS & ENTRANTES",
            subtitle: "CRUJIENTES, DORADAS Y EN SU PUNTO EXACTO",
            items: [
                {
                    name: "Alitas Caseras Halo (5 uds)",
                    price: "6.00€",
                    desc: "Alitas de pollo maceradas durante 24h en especias secretas, fritas hasta lograr un rebozado dorado y crujiente.",
                    image: "ASSETS/alitas.jpg",
                    tag: "Top Ventas"
                },
                {
                    name: "Alitas Glaseadas BBQ",
                    price: "6.00€",
                    desc: "Bañadas al fuego con nuestra salsa barbacoa ahumada casera o toque picante de la casa.",
                    image: "ASSETS/alitas1.jpg",
                    tag: "Sabor Intenso"
                },
                {
                    name: "Bocadillos & Brioches",
                    price: "Desde 5.50€",
                    desc: "Pan tierno artesanal relleno de carnes a la plancha, lechuga, tomate y huevo.",
                    image: "ASSETS/bocadillo.jpg",
                    tag: "Puro Sabor"
                }
            ]
        },
        {
            id: "salsas",
            title: "SALSAS DE LA CASA",
            subtitle: "EL SECRETO QUE HACE A HALO INCONFUNDIBLE",
            items: [
                {
                    name: "Dips de Salsas Caseras",
                    price: "1.00€",
                    desc: "Salsa Secreta Halo Deluxe, Crema de Cheddar Fundido, Mayonesa Trufada, BBQ Ahumada o Salsa Picante.",
                    image: "ASSETS/salsas.jpg",
                    tag: "Receta Propia"
                }
            ]
        },
        {
            id: "plancha",
            title: "LA PLANCHA & EL EQUIPO",
            subtitle: "HIERRO A MÁS DE 250ºC, TÉCNICA Y PASIÓN ARTESANA",
            gallery: [
                { src: "ASSETS/plancha.jpg", title: "Plancha al Rojo Vivo", desc: "Temperatura extrema para la caramelización perfecta en cada smash burger." },
                { src: "ASSETS/cocinero.jpg", title: "Nuestros Cocineros", desc: "Cuidamos cada ingrediente para garantizar la máxima calidad en cada pedido." },
                { src: "ASSETS/cocinero1.jpg", title: "Pasión por el Smash", desc: "Elaboración al instante para que llegue caliente y crujiente a tu mesa o a casa." }
            ]
        },
        {
            id: "delivery",
            title: "PEDIDOS & RECOGIDA EN LOCAL",
            subtitle: "CALIENTE, RECIÉN HECHO Y LISTO PARA DISFRUTAR",
            items: [
                {
                    name: "Servicio de Pedidos Directos",
                    desc: "Haz tu pedido por teléfono y pasa a recogerlo sin esperas en Calle Santa Brígida, 2.",
                    image: "ASSETS/pedido.jpg",
                    tag: "Empaquetado Térmico"
                },
                {
                    name: "Atención Telefónica Inmediata",
                    desc: "Llámanos directamente al 858 83 14 38 o al 603 72 70 08 para tomar tu comanda al momento.",
                    image: "ASSETS/pedido2.jpg",
                    tag: "Llamada Directa"
                },
                {
                    name: "Toda Nuestra Carta",
                    desc: "Consulta todas nuestras opciones de smash burgers, bocadillos, sandwiches y entrantes.",
                    image: "ASSETS/menu.jpg",
                    tag: "Carta Oficial"
                }
            ]
        },
        {
            id: "local",
            title: "EL LOCAL EN MARACENA",
            subtitle: "TU PUNTO DE ENCUENTRO EN CALLE SANTA BRÍGIDA, 2",
            gallery: [
                { src: "ASSETS/local.jpg", title: "Ambiente Halo", desc: "Espacio urbano y acogedor para comer en el local o esperar tu pedido take away." },
                { src: "ASSETS/local1.jpg", title: "Nuestra Barra", desc: "Donde preparamos cada pedido al instante con ingredientes frescos del día." },
                { src: "ASSETS/local2.jpg", title: "Vibra Street Food", desc: "El mejor punto gastronómico de street food en Maracena." }
            ]
        },
        {
            id: "comunidad",
            title: "COMUNIDAD & CLIENTES",
            subtitle: "MÁS DE 1.400 SEGUIDORES DISFRUTANDO EL AUTÉNTICO SMASH",
            gallery: [
                { src: "ASSETS/comiendo hamburguesa2.jpg", title: "Mordiscos Inolvidables", desc: "La satisfacción del auténtico queso fundido y carne crujiente." },
                { src: "ASSETS/cominedo hambugursa.jpg", title: "Momentos Reales", desc: "Clientes compartiendo la experiencia Halo en Maracena." }
            ]
        }
    ]
};
