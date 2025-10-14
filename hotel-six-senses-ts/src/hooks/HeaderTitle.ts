import { useLocation } from "react-router-dom";


/*  para tener en el header la seccion */
export const useHeaderTitle = (): string => {
    const { pathname } = useLocation();

    if (pathname === '/reservar') return 'reservar';
    if (pathname === '/habitaciones') return 'habitaciones';
    if (pathname.startsWith('/habitaciones/')) return 'habitaciones';
    if (pathname === '/instalaciones') return 'instalaciones';

    return '';
}
