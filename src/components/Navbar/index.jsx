import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import styles from "./styles.module.css"

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navNavigation}>
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
