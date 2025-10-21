export interface Habitacion {
  id: string;
  name: string;
  description: string;
  servicios: string[];
  datos: string;
  default: string;
  hover: string;
  size: "tall" | "medium" | "wide";
  price: number;
  numeroMaximoPersonas?: number;
}

export const habitaciones: Habitacion[] = [
  {
    id: "cave-royale",
    name: "habitación cave royale",
    description:
      "el refugio de lujo definitivo en Ibiza, con una cama de gran tamaño, un baño enorme, una zona de estar interior y exterior de tamaño generoso, un bar completo y una bañera al aire libre de gran tamaño. una puerta secreta le llevará al estudio de grabación de abajo.",

    servicios: [
      "artículos de baño sostenibles",
      "servicio de café y té en la suite",
      "agua potable embotellada six senses",
      "minibar y rincón de aperitivos gourmet",
      "esterilla de yoga",
      "menú de almohadas",
      "secador de pelo",
      "tv de pantalla plana con canales vía satélite",
      "equipos de música de alta gama de mcintosh",
      "acceso privado al estudio de grabación, bajo petición y sujeto a disponibilidad",
    ],

    datos:
      "3,368 pies cuadrados / 313 m², máximo de huéspedes 3, vistas: mar, 1 dormitorio",
    default: "/imgs/habitaciones/cave-royal.webp",
    hover: "/imgs/habitaciones/cave-royal-2.webp",
    size: "tall",
    price: 200,
    numeroMaximoPersonas: 3,
  },

  {
    id: "deluxe",
    name: "habitación deluxe",
    description:
      "el alojamiento íntimo definitivo en Ibiza, que ofrece amplias vistas panorámicas al mar desde la gran terraza de la azotea.",
    servicios: [
      "artículos de baño sostenibles",
      "servicio de café y té en la suite",
      "agua potable embotellada six senses",
      "minibar y rincón de aperitivos gourmet",
      "caja fuerte personal",
      "esterilla de yoga",
      "menú de almohadas",
      "secador de pelo",
      "tv de pantalla plana con canales vía satélite",
      "altavoz bluetooth",
    ],
    datos:
      "474 pies cuadrados / 44 m², máximo de huéspedes 2, vistas: parciales al mar, 1 dormitorio",
    default: "/imgs/habitaciones/hab-deluxe-2.webp",
    hover: "/imgs/habitaciones/hab-deluxe.webp",
    size: "wide",
    price: 180,
    numeroMaximoPersonas: 2,
  },

  {
    id: "sea-scape-room",
    name: "habitación sea scape room",
    description:
      "ubicada al borde del océano, esta espaciosa y elegante suite de un dormitorio es ideal para marineros, sirenas, tritones y amantes del sol por igual.",
    servicios: [
      "artículos de baño sostenibles",
      "servicio de café y té en la suite",
      "agua potable embotellada six senses",
      "minibar y rincón de aperitivos gourmet",
      "caja fuerte personal",
      "esterilla de yoga",
      "menú de almohadas",
      "secador de pelo",
      "tv de pantalla plana con canales vía satélite",
      "altavoz bluetooth",
    ],
    datos:
      "1,409 pies cuadrados / 131 m², máximo de huéspedes 3, vistas: mar, 1 dormitorio",
    default: "/imgs/habitaciones/sea-scape-room.webp",
    hover: "/imgs/habitaciones/sea-scape-room-2.webp",
    size: "medium",
    price: 220,
    numeroMaximoPersonas: 3,
  },

  {
    id: "sea-view-junior",
    name: "habitación sea view junior",
    description:
      "una espaciosa y elegante junior suite con sala de estar que se abre a una terraza privada con unas gloriosas vistas abiertas al mar.",
    servicios: [
      "artículos de baño sostenibles",
      "servicio de café y té en la suite",
      "agua potable embotellada six senses",
      "minibar y rincón de aperitivos gourmet",
      "caja fuerte personal",
      "esterilla de yoga",
      "menú de almohadas",
      "secador de pelo",
      "tv de pantalla plana con canales vía satélite",
      "altavoz bluetooth",
    ],
    datos:
      "828 pies cuadrados / 77 m², máximo de huéspedes 2, vistas: mar, 1 dormitorio",
    default: "/imgs/habitaciones/sea-view-junior-2.webp",
    hover: "/imgs/habitaciones/sea-view-junior.webp",
    size: "tall",
    price: 200,
    numeroMaximoPersonas: 2,
  },

  {
    id: "ten-mansion",
    name: "habitación ten mansion",
    description:
      "despierte con unas vistas al mar que revitalizan el alma y con infinitas posibilidades en nuestra ten bedroom Mansion en Ibiza. déjese llevar por el sueño con la máxima comodidad y privacidad.",
    servicios: [
      "traslado gratuito al aeropuerto de ida y vuelta",
      "artículos de baño sostenibles",
      "servicio de café y té en la suite",
      "agua potable embotellada six senses",
      "minibar y rincón de aperitivos gourmet",
      "caja fuerte personal",
      "esterilla de yoga",
      "menú de almohadas",
      "secador de pelo",
      "tv de pantalla plana con canales vía satélite",
      "sistema de entretenimiento, altavoz bluetooth",
      "wifi",
      "cargador de coche eléctrico",
      "garaje privado para dos coches",
    ],
    datos:
      "21,840 pies cuadrados / 2,029 m², máximo de huéspedes 20, vistas: mar, 10 dormitorios",
    default: "/imgs/habitaciones/ten-mansion-2.webp",
    hover: "/imgs/habitaciones/ten-mansion.webp",
    size: "wide",
    price: 1000,
    numeroMaximoPersonas: 20,
  },

  {
    id: "xarraca-room",
    name: "habitación xarraca room",
    description:
      "en un enclave orgulloso, alto y apartado en la parte superior del studio wing del resort vacacional Six Senses Ibiza, la espaciosa sala de estar y los dos dormitorios separados comparten una amplia terraza con vistas al mar.",
    servicios: [
      "artículos de baño sostenibles",
      "servicio de café y té en la suite",
      "agua potable embotellada six senses",
      "minibar y rincón de aperitivos gourmet",
      "caja fuerte personal",
      "esterilla de yoga",
      "menú de almohadas",
      "secador de pelo",
      "tv de pantalla plana con canales vía satélite",
      "altavoz bluetooth",
    ],
    datos:
      "2,744 pies cuadrados / 255 m², máximo de huéspedes 5, vistas: mar, 2 dormitorios",
    default: "/imgs/habitaciones/xarraca-room-2.webp",
    hover: "/imgs/habitaciones/xarraca-room.webp",
    size: "medium",
    price: 400,
    numeroMaximoPersonas: 5,
  },
];
