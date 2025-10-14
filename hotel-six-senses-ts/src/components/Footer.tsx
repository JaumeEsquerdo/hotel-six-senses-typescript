

const Footer = () => {

    return (
        <footer className="Footer">
            <h4 className="Footer-h4">Ibiza, Spain</h4>
            <form className="Footer-form" >
                <label>
                    <input className="Footer-input" placeholder="escribe-aqui@tu-email.com" type="email" />
                </label>
                <button className="Footer-btn" type="submit">Recibir ofertas</button>
            </form>
            <a className="Footer-link" target="_blank" href={'https://www.instagram.com/'}>Instagram</a>
        </footer>
    );
}

export default Footer;