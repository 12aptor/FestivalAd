import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { MdKeyboardArrowUp } from 'react-icons/md'

const Header: NextPage = () => {

    const router = useRouter()
    // const style = {
    //     marginRight: 10,
    //     color: router.asPath === '/' ? 'red' : 'black',
    // }

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        router.push('/')
    }

    return (
        <header>
            <nav>
                <div className="container">
                    <ul>
                        <li className="nav-logo">
                            <a href="#home" onClick={handleClick} >
                                <a>Festival</a>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#comoFunciona" onClick={handleClick} >
                                <a>¿Cómo funciona?</a>
                            </a>
                        </li>
                        <li className="nav-item">Formatos <MdKeyboardArrowUp />
                            <ul className="nav-drop">
                                <li>Our Team</li>
                                <li>Our Process</li>
                                <li>History</li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#precios" onClick={handleClick} >
                                <a>Precios</a>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#socios" onClick={handleClick} >
                                <a>Socios</a>
                            </a>
                        </li>
                        <li className="nav-btn">
                            <button>Crear campaña</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header