import { createBrowserRouter } from 'react-router'

// importe de páginas

import Home from '@/pages/Home'
import Habitaciones from '@/pages/Habitaciones'
import Instalaciones from '@/pages/Instalaciones'
import Reservar from '@/pages/Reservar'
import HabitacionDetalles from '@/pages/HabitacionDetalle'


// importe de páginas especiales
import Layout from '@/Layout'
import ErrorPage from '@/pages/ErrorPage'




const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        index: true,// página principal sin Layout, para q no comparta header y footer
    }
    ,
    {
        element: <Layout />,
        children:
            [
                {
                    path: '/habitaciones',
                    element: <Habitaciones />,
                },
                {
                    path: '/habitaciones/:id',
                    element: <HabitacionDetalles />
                },
                {
                    path: '/instalaciones',
                    element: <Instalaciones />,
                },
                {
                    path: '/reservar',
                    element: <Reservar />,
                }
            ]
    }
    ,
    {
        path: '*',
        element: <ErrorPage />
    }
])
export default router