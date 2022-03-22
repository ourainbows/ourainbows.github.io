import styles from "./styles.module.css"
import ScrollContainer from 'react-indiana-drag-scroll'
import project1 from "../../assets/projects/project1.webp"
import project2 from "../../assets/projects/project2.webp"
import project3 from "../../assets/projects/project3.webp"
import project4 from "../../assets/projects/project4.webp"
import project5 from "../../assets/projects/project5.webp"
import project6 from "../../assets/projects/project6.webp"
import project7 from "../../assets/projects/project7.webp"
import project8 from "../../assets/projects/project8.webp"
import project9 from "../../assets/projects/project9.webp"
import project10 from "../../assets/projects/project10.webp"
import {AiOutlineLink} from "react-icons/ai"

function Projects() {
    return (
        <section id="projects" className={styles.sectionProjects}>
            <h2 className={styles.title}>Proyectos</h2>
            <div className={styles.containerProjects}>
                {/* mirar el end scroll mas la posicion en x */}
                <ScrollContainer className={styles.container} vertical={false}>
                   <div className={styles.project}>
                        <img src={project10} alt="Proyecto" />
                        <p className={styles.link}><AiOutlineLink />Rick and Morty API</p>
                   </div>
                   <div className={styles.project}>
                        <img src={project2} alt="Proyecto" />
                        <p className={styles.link}><AiOutlineLink/>Servicios Ackerman</p>
                   </div>
                        <div className={styles.project}>
                             <img src={project4} alt="Proyecto" />
                             <p className={styles.link}><AiOutlineLink />Flores del Tambo</p>
                        </div>
                   <div className={styles.project}>
                        <img src={project3} alt="Proyecto" />
                        <p className={styles.link}><AiOutlineLink />Tetris</p>
                   </div>
                   <div className={styles.project}>
                        <img src={project5} alt="Proyecto" />
                        <p className={styles.link}><AiOutlineLink />Amaranta</p>
                   </div>
                   <div className={styles.project}>
                        <img src={project6} alt="Proyecto" />
                        <p className={styles.link}><AiOutlineLink />Todo App</p>
                   </div>
                   <div className={styles.project}>
                        <img src={project7} alt="Proyecto" />
                        <p className={styles.link}><AiOutlineLink />Calculadora Basica</p>
                   </div>
                   <div className={styles.project}>
                        <img src={project8} alt="Proyecto" />
                        <p className={styles.link}><AiOutlineLink />Pokedex</p>
                   </div>
                   <div className={styles.project}>
                        <img src={project9} alt="Proyecto" />
                        <p className={styles.link}><AiOutlineLink />Ahorcado</p>
                   </div>
                   <div className={styles.project}>
                        <img src={project1} alt="Proyecto" />
                        <p className={styles.link}><AiOutlineLink />Portafolio Antiguo</p>
                   </div>
                </ScrollContainer>
            </div>

        </section>
    )
}

export { Projects }