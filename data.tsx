import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Airplay, Combine, CloudFog, BookLock, TabletSmartphone, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Laravel y Bases de Datos",
        subtitle: "Creación de aplicaciones dinámicas",
        description: "Integré Laravel con bases de datos, aplicando migraciones y crear aplicaciones dinámicas.",
        date: "Jul 2025",
    },
    {
        id: 2,
        title: "Introducción a Laravel",
        subtitle: "Primeros pasos en frameworks PHP",
        description: "Aprendí lo básico del framework Laravel, explorando su estructura MVC y funciones principales para el desarrollo web.",
        date: "Jun 2025",
    },
    {
        id: 3,
        title: "Arquitecturas de Software",
        subtitle: "Modelos de desarrollo escalable",
        description: "Estudié distintos modelos de organización de software como el enfoque monolítico y el patrón MVC, entendiendo cómo afectan la escalabilidad y el mantenimiento de aplicaciones.",
        date: "Mar 2025",
    },
    {
        id: 4,
       title: "MySQL y Bases de Datos",
        subtitle: "Organización y gestión de datos",
        description: "Adquirí conocimientos en bases de datos estructuradas con MySQL, practicando consultas, normalización y optimización.",
        date: "Dic 2024 ",
    },

     {
        id: 5,
        title: "Fundamentos de Python",
        subtitle: "Primeros pasos en la programación",
        description: "Aprendí los fundamentos de la programación en Python, construyendo una base sólida en lógica y resolución de problemas.",
        date: "Jun 2024 ",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 4,
        text: "Tecnoligias aprendidas",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 5,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 4,
        text: "Lenguajes de programación dominados",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Rocket />,
        title: "Bases de Datos Optimizadas",
        description: "Diseño de estructuras eficientes y consultas rápidas en MySQL para un mejor rendimiento.",
    },
    {
        icon: <Airplay />,
        title: "Mantenimiento de Código",
        description: "Refactorización, corrección de errores y mejora continua para mantener proyectos estables.",
    },
    {
        icon: <CloudFog />,
        title: "Proyectos Escalables",
        description: "Estructura de proyectos lista para crecer, con código organizado y fácil de mantener.",
    },
    {
        icon: <BookLock />,
        title: "Seguridad en Aplicaciones",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <TabletSmartphone />,
        title: "Interfaces Dinámicas",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
    {
        icon: <Combine />,
        title: "Integración con Laravel",
        description: "Implementación de funciones avanzadas del framework para crear proyectos robustos y organizados.",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "GamePedia(HTML)",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/BenjaminVega-git/GamePediaHTML",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "ERP_ventas",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/BenjaminVega-git/ERP_ventas",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "GamePedia(PHP)",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/BenjaminVega-git/GamePediaPHP",
        urlDemo: "#!",
    },

    {
        id: 4,
        title: "Portfolio",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/BenjaminVega-git/Portfolio",
        urlDemo: "#!",
    },

];

export const dataTestimonials = [
    {
        id: 1,
        name: "Carlos Méndez",
        description:
            "Siempre aporta soluciones creativas y código limpio. Destaca por su compromiso y responsabilidad en cada proyecto.",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "María González",
        description:
            "El servicio fue excelente. Desde el primer momento entendió lo que necesitábamos y transformó nuestras ideas en una solución web eficiente y bien estructurada. Muy recomendable.",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "Javier Ramírez",
        description:
            "Trabajar con él fue una gran experiencia. Supo optimizar nuestro sistema y ahora todo funciona de manera más rápida y segura. Muy profesional y atento en cada detalle.",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Diego Morales",
        description:
            "Benjamín entendió el proyecto desde el día uno y entregó una web en Laravel rápida y segura. Se notó la calidad del código y la comunicación constante; cumplió cada hito antes del plazo. Volvería a trabajar con él sin dudarlo.",
        imageUrl: "/profile4.png",
    },

];
