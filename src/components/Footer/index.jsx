import styles from "./styles.module.css"
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
import { SiGmail } from "react-icons/si"

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <div>
                        <div className={styles.brand}>Juan Casas<span>.</span></div>
                        <p className={styles.aboutMe}>Soy Juan Casas, Frontend Developer.<br/> Acompañame en este viaje y creemos grandes experiencias juntos.</p>
                        <p className={styles.copyright}>©2023. Todos los derechos reservados.</p>
                    </div>
                    <div className={styles.navigationContainer}>
                        <ul className={styles.listItems}>
                            <li className={styles.listTitle}>Navegacion</li>
                            <li className={styles.listItem}><a href="#home">Inicio</a></li>
                            <li className={styles.listItem}><a href="#services">Servicios</a></li>
                            <li className={styles.listItem}><a href="#about">Acerca de mi</a></li>
                            <li className={styles.listItem}><a href="#projects">Proyectos</a></li>
                            <li className={styles.listItem}><a href="#feedback">Feedback</a></li>
                        </ul>
                    </div>
                    <div className={styles.contactContainer}>
                        <ul className={styles.listItems}>
                            <li className={styles.listTitle}>Contacto</li>
                            <li className={styles.listItem}><a href="https://www.linkedin.com/in/jfcasas/"><AiFillLinkedin />Juan Casas</a></li>
                            <li className={styles.listItem}><a href="https://github.com/ourainbows"><AiFillGithub />ourainbows</a></li>
                            <li className={styles.listItem}><a href="https://twitter.com/ourainbows"><AiFillTwitterCircle />ourainbows</a></li>
                            <li className={styles.listItem}><a href="mailto:casasjuanfelipe@gmail.com"><SiGmail />casasjuanfelipe@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <p className={styles.copyrightMobile}>©2021. Todos los derechos reservados.</p>
            </footer>
        </>
    )
}

export { Footer }