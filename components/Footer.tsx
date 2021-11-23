const Footer = () => {
    const retornarNombre = () => {
        return 'Soy un Nombre'
    }
    return (
        <footer>
            <p>Holitas en el mar</p>
            {retornarNombre()}
        </footer>
    )

}

export default Footer