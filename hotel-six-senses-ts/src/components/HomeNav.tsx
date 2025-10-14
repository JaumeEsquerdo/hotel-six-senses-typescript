import { useAppContext } from '@/context/AppContext'
import { Link } from 'react-router-dom';


export const HomeNav = () => {
    const { isMenuOpen, setIsMenuOpen } = useAppContext();

    return (
        <div className='Home-nav'>
            <div className='General-menu'

            >
                <span className='General-link--arrow'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>

                    <span className='General-link General-link--home'
                    >menú </span>
                    <span className={`material-symbols-outlined home ${!isMenuOpen ? 'cerrado' : ''}`}>
                        straight
                    </span>
                </span>


                {isMenuOpen &&
                    (
                        <div className='General-submenu'>
                            <Link to={'/habitaciones'} className='General-link General-link--home'>habitaciones</Link>
                            <Link to={'/instalaciones'} className='General-link General-link--home'>instalaciones</Link>

                        </div>
                    )
                }

            </div>

            <Link className='General-link General-link--home' to={'/reservar'}>reservar</Link>
        </div>


    );
}

