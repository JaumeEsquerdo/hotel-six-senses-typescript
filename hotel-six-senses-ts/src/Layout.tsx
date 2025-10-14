
import { Outlet, useLocation } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { useAppContext } from '@/context/AppContext'



function Layout() {
  const { setIsMenuOpen } = useAppContext();
  const location = useLocation();


  useEffect(() => {
    setIsMenuOpen(false); // Cierra el menú al cambiar de ruta
  }, [location.pathname, setIsMenuOpen]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
