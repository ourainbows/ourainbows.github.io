import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import styles from "./styles.module.css"

function Navbar() {
    return (
        <nav id="home" className={styles.nav}>
            <div className={styles.navNavigation}>
                <button className={styles.hamburguerBtn}><HiOutlineMenuAlt1/></button>
                <div className={styles.navNavigationBrand}>Juan Casas<span> .</span></div>
                <ul>
                    <li>Inicio</li>
                    <li>Servicios</li>
                    <li>Acerca de mi</li>
                    <li>Proyectos</li>
                </ul>
            </div>
            <div className={styles.navSocial}>
                <a href="https://github.com/ourainbows">
                    <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/jfcasas/">
                    <GrLinkedinOption />
                </a>
            </div>
        </nav>
    )
}

export { Navbar }