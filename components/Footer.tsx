const Footer = () => {
    const renderName = () => {
        return 'Soy un Nombre'
    }
    return (
        <footer>
            <p>Holitas en el mar</p>
            {renderName()}
        </footer>
    )

}

export default Footer