import type { NextPage } from 'next'
import Header from '../components/Header'
import styles from '../styles/Home.module.scss'

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header />

            <h1 style={{ paddingTop: '200px' }}>About</h1>
        </div>
    )
}

export default About