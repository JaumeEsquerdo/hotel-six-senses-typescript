import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <>
            <div className="ErrorPage">
                <h1>Error en la búsqueda de la página. Prueba de nuevo</h1>
                <Link to={'/'}>Volver al inicio</Link>
            </div>
        </>
    );
}

export default ErrorPage;