export interface Instalacion {
  id: string;
  name: string;
  description: string;
  default: string;
  hover: string;
  size: "tall" | "medium" | "wide";
}

export const instalaciones = [
  {
    id: "hotel",
    name: "hotel",
    description:
      "arquitectura orgánica frente al mar, integrada en el paisaje y bañada por la luz del mediterráneo.",

    default: "/imgs/instalaciones/hotel.webp",
    hover: "/imgs/instalaciones/hotel2.webp",
    size: "wide",
  },
  {
    id: "bar",
    name: "bar",
    description:
      "ambiente íntimo con cócteles de autor, vistas envolventes y una atmósfera perfecta para atardeceres inolvidables.",

    default: "/imgs/instalaciones/bar.webp",
    hover: "/imgs/instalaciones/bar2.webp",
    size: "tall",
  },
  {
    id: "restaurante",
    name: "restaurante partal",
    description:
      "cene al aire libre bajo olivos centenarios con vistas panorámicas al Mediterráneo y un asiento en primera fila en nuestra cocina al aire libre.",

    default: "/imgs/instalaciones/mesas.webp",
    hover: "/imgs/instalaciones/mesas2.webp",
    size: "medium",
  },
  {
    id: "piscina",
    name: "piscina",
    description:
      "retiro luminoso con piscina privada, zonas de descanso interiores y exteriores, bañera exterior y un acceso discreto a un estudio creativo escondido.",

    default: "/imgs/instalaciones/piscina.webp",
    hover: "/imgs/instalaciones/piscina2.webp",
    size: "wide",
  },
  {
    id: "spa",
    name: "spa",
    description:
      "un santuario de bienestar rodeado de naturaleza, con tratamientos holísticos, espacios tranquilos y vistas al mediterráneo.",

    default: "/imgs/instalaciones/spa.webp",
    hover: "/imgs/instalaciones/spa2.webp",
    size: "medium",
  },
  {
    id: "vistas",
    name: "vistas",
    description:
      "una escapada serena con vistas impresionantes, amplios espacios interiores y exteriores, bañera exterior privada y acceso exclusivo a un estudio creativo oculto.",

    default: "/imgs/instalaciones/vistas.webp",
    hover: "/imgs/instalaciones/vistas2.webp",
    size: "tall",
  },
];
