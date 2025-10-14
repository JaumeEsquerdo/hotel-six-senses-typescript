import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router'
import router from '@/lib/routes/router'

import { AppProvider } from './context/AppContext'
import '@/css/index.css'
import '@/css/header.css'
import '@/css/footer.css'
import '@/css/home.css'
import '@/css/habitaciones.css'
import '@/css/instalaciones.css'
import '@/css/reservar.css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
)
