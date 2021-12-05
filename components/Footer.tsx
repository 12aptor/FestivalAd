const Footer = () => {
    const renderName = () => {
        return 'Soy un Nombre'
    }
    return (
        <footer>
           <div className="footer__container">
                <div className="footer__logo">
                    <img src="../logo-white.svg" />
                </div>
                <section className="footer__nav">
                    <div className="footer__section">
                        <h5>Empresa</h5>
                        <ul>
                            <li><a href="#">¿Cómo funciona?</a></li>
                            <li><a href="#">Acerca de nosotros</a></li>
                            <li><a href="#">Beneficios</a></li>
                            <li><a href="#">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h5>Productos</h5>
                        <ul>
                            <li><a href="#">Para Marcas</a></li>
                            <li><a href="#">Para Medios</a></li>
                            <li><a href="#">Para bandas</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h5>Información</h5>
                        <ul>
                            <li><a href="#">Política de Privacidad</a></li>
                            <li><a href="#">Términos y Condiciones</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                </section>
           </div>
           <span>Fuelled by Ceviche</span>
        </footer>
    )

}

export default Footer