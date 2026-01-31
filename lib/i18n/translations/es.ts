/**
 * Mensajes en español. Las claves deben coincidir con en.ts y ru.ts.
 * Se accede con t("nav.home"), t("catalog.categories.carteras"), etc.
 */
export default {
  nav: {
    home: "Inicio",
    catalog: "Catálogo",
    contact: "Contacto",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    navLabel: "Navegación principal",
    navMobile: "Menú móvil",
  },
  home: {
    heroTitle: "Cuero artesanal,",
    heroTitleHighlight: "hecho a mano",
    heroSubtitle:
      "Carteras, cinturones y accesorios únicos. Cada pieza sale de nuestro taller con dedicación y oficio.",
    viewCatalog: "Ver catálogo",
    contact: "Contacto",
  },
  homeFeatured: {
    title: "Destacados",
    viewAll: "Ver todo el catálogo",
  },
  homeCta: {
    title: "¿Consultas o pedidos a medida?",
    description:
      "Escribinos por WhatsApp y te respondemos a la brevedad. También hacemos piezas por encargo.",
    writeWhatsApp: "Escribir por WhatsApp",
    otherContact: "Ver otras formas de contacto",
  },
  catalog: {
    title: "Catálogo",
    description:
      "Todos nuestros artículos están hechos a mano en el taller. Cada pieza es única.",
    filterByCategory: "Filtrar por categoría",
    categories: {
      carteras: "Carteras",
      cinturones: "Cinturones",
      accesorios: "Accesorios",
      otros: "Otros",
    },
  },
  product: {
    backToCatalog: "Volver al catálogo",
    available: "Disponible",
    consultWhatsApp: "Consultar por WhatsApp",
    otherContacts: "Otros contactos",
    notFound: "Producto no encontrado",
  },
  contact: {
    title: "Contacto",
    intro:
      "¿Consultas, pedidos a medida o querés visitar el taller? Escribinos o llamanos.",
    email: "Email",
    whatsapp: "WhatsApp",
    address: "Dirección",
    instagram: "Instagram",
    clickToOpenWhatsApp: "Click para abrir WhatsApp",
  },
  footer: {
    tagline:
      "Artesanía en cuero. Carteras, cinturones y accesorios hechos a mano en nuestro taller. Calidad y diseño único.",
    links: "Enlaces",
    contact: "Contacto",
    madeWith: "Hecho a mano con dedicación.",
  },
  notFound: {
    title: "404",
    message: "No encontramos la página que buscás.",
    backHome: "Volver al inicio",
  },
  common: {
    brand: "Bao",
    brandAria: "Bao - Inicio",
  },
} as const;
