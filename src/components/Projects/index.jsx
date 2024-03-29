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
import project11 from "../../assets/projects/project11.webp"
import project12 from "../../assets/projects/project12.webp"
import { AiOutlineLink } from "react-icons/ai"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projects() {
     useEffect(() => {
          AOS.init();
          AOS.refresh();
     }, []);
     return (
          <section id="projects" className={styles.sectionProjects}>
               <h2 className={styles.title} data-aos="fade-right" data-aos-duration="1800">Proyectos</h2>
               <div className={styles.containerProjects} data-aos="fade-up">
                    {/* mirar el end scroll mas la posicion en x */}
                    <ScrollContainer className={styles.container} vertical={false}>
                         <a href="https://coderyapp.netlify.app/" target="_blank" rel="noreferrer">
                              <div className={styles.project}>
                                   <img src={project12} alt="Proyecto" />
                                   <p className={styles.link}><AiOutlineLink />Codery | Red Social</p>
                              </div>
                         </a>
                         <a href="https://ourainbows.github.io/RickAndMorty/" target="_blank" rel="noreferrer">
                              <div className={styles.project}>
                                   <img src={project10} alt="Proyecto" />
                                   <p className={styles.link}><AiOutlineLink />Rick and Morty API</p>
                              </div>
                         </a>
                         <a href="https://ourainbows.github.io/google-clon/" target="_blank" rel="noreferrer">
                              <div className={styles.project}>
                                   <img src={project11} alt="Proyecto" />
                                   <p className={styles.link}><AiOutlineLink />Google Clon</p>
                              </div>
                         </a>
                         <a href="https://ourainbows.github.io/mikasa-ackerman-tribute/" target="_blank" rel="noreferrer">
                         <div className={styles.project}>
                              <img src={project2} alt="Proyecto" />
                              <p className={styles.link}><AiOutlineLink />Servicios Ackerman</p>
                         </div>
                         </a>
                         <a href="https://mern-flores-tambo.herokuapp.com/" target="_blank" rel="noreferrer">
                              <div className={styles.project}>
                                   <img src={project4} alt="Proyecto" />
                                   <p className={styles.link}><AiOutlineLink />Flores del Tambo</p>
                              </div>
                         </a>
                         <a href="https://ourainbows.github.io/tetris-game/" target="_blank" rel="noreferrer">
                              <div className={styles.project}>
                                   <img src={project3} alt="Proyecto" />
                                   <p className={styles.link}><AiOutlineLink />Tetris</p>
                              </div>
                         </a>
                         <a href="https://ourainbows.github.io/amaranta-store/" target="_blank" rel="noreferrer">
                              <div className={styles.project}>
                                   <img src={project5} alt="Proyecto" />
                                   <p className={styles.link}><AiOutlineLink />Amaranta</p>
                              </div>
                         </a>
                         <a href="https://ourainbows.github.io/todo-app-react/" target="_blank" rel="noreferrer">
                              <div className={styles.project}>
                                   <img src={project6} alt="Proyecto" />
                                   <p className={styles.link}><AiOutlineLink />Todo App</p>
                              </div>
                         </a>
                         <a href="https://ourainbows.github.io/basic-calculator/" target="_blank" rel="noreferrer">
                              <div className={styles.project}>
                                   <img src={project7} alt="Proyecto" />
                                   <p className={styles.link}><AiOutlineLink />Calculadora Basica</p>
                              </div>
                         </a>
                         <a href="https://ourainbows.github.io/pokedex/" target="_blank" rel="noreferrer">
                              <div className={styles.project}>
                                   <img src={project8} alt="Proyecto" />
                                   <p className={styles.link}><AiOutlineLink />Pokedex</p>
                              </div>
                         </a>
                         <a href="https://valentinarippe.github.io/Juego-Ahorcado/" target="_blank" rel="noreferrer">
                              <div className={styles.project}>
                                   <img src={project9} alt="Proyecto" />
                                   <p className={styles.link}><AiOutlineLink />Ahorcado</p>
                              </div>
                         </a>
                         <a href="https://ourainbows.github.io/portfolio/" target="_blank" rel="noreferrer">
                              <div className={styles.project}>
                                   <img src={project1} alt="Proyecto" />
                                   <p className={styles.link}><AiOutlineLink />Portafolio Antiguo</p>
                              </div>
                         </a>
                    </ScrollContainer>
               </div>

          </section>
     )
}

export { Projects }