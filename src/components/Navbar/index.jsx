import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { Hamburguer } from '../Hamburguer';
import styles from "./styles.module.css"

function Navbar() {
    const openModal = event => {
        setActive(!active)
    }
    const [active, setActive] = useState(false)
    return (
        <>
            <nav id="home" className={active ? `${styles.nav} ${styles.active}` : styles.nav}>
                <div className={styles.navNavigation}>
                    <button
                        onClick={openModal}
                        className={styles.hamburguerBtn}
                    >
                        {active ? <HiOutlineMenuAlt1 /> : <MdOutlineClose />}
                    </button>
                    <div className={styles.navNavigationBrand}>Juan Casas<span> .</span></div>
                    <ul>
                        <li><a onClick={openModal} href='#home'>Inicio</a></li>
                        <li><a onClick={openModal} href='#services'>Servicios</a></li>
                        <li><a onClick={openModal} href='#aboutMe'>Acerca de mi</a></li>
                        <li><a onClick={openModal} href='#projects'>Proyectos</a></li>
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
            {/* <Hamburguer active={ active}/> */}
        </>
    )
}

export { Navbar }