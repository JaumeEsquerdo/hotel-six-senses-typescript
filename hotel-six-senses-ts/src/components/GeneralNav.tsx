import { useAppContext } from '@/context/AppContext'
import { Link } from 'react-router-dom';

const GeneralNav = () => {
    const { isMenuOpen, setIsMenuOpen } = useAppContext();


    return (

        <div className='General-nav'>
            <div className='General-menu'

            >
                <span className='General-link--arrow'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>

                    <span className='General-link'
                    >menú </span>
                    <span className={`material-symbols-outlined ${!isMenuOpen ? 'cerrado' : ''}`}>
                        straight
                    </span>
                </span>


                {isMenuOpen &&
                    (
                        <div className='General-submenu'>
                            <Link to={'/habitaciones'} className='General-link'>habitaciones</Link>
                            <Link to={'/instalaciones'} className='General-link'>instalaciones</Link>

                        </div>
                    )
                }

            </div>

            <Link className='General-link' to={'/reservar'}>reservar</Link>
        </div>

    );
}

export default GeneralNav;