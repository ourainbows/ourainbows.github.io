import styles from "./styles.module.css"
import { FaArrowRight } from "react-icons/fa"
import cssIcon from "../../assets/cssIcon.svg"
import jsIcon from "../../assets/jsIcon.svg"
import figmaIcon from "../../assets/figmaIcon.svg"
import reactIcon from "../../assets/reactIcon.svg"
import arch from '../../assets/arch.svg'
import tux from '../../assets/tux.svg'
import mongo from '../../assets/mongo.svg'
import mysql from '../../assets/mysql.svg'
import mariadb from '../../assets/mariadb.svg'
import typescript from '../../assets/typescript.svg'
import sass from '../../assets/sass.svg'
import angular from '../../assets/angular.svg'
/* import notion from '../../assets/notion.svg' */
import vscode from '../../assets/vscode.svg'
import python from '../../assets/python.svg'
import boostrap from '../../assets/bootstrap.svg'
import node from '../../assets/node.svg'
import git from '../../assets/git.svg'
import github from '../../assets/github.svg'
import html from '../../assets/html.svg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section id="aboutMe" className={styles.container}>
            <div className={styles.info} data-aos="fade-right" data-aos-duration="1800">
                <h2 className={styles.title}>Acerca de mi</h2>
                <p className={styles.text}>
                    Mi nombre es Juan Felipe Casas, soy un desarrollador web enfocado al área del frontend.
                    Tengo experiencia trabajando en proyectos reales con lenguajes de programación como <span>HTML, CSS, Javascript, React Js</span>, con el stack <span>MERN</span> y creando mockups con <span>Figma.</span><br/>
                    Además tengo conocimientos de lado del backend en Python, y tengo conocimiento básico en bases de datos relacionales con mysql/mariadb y las bases de datos no relacionales con mongodb.<br/>
                    Para mi es muy importante la experiencia e interacción que va a tener el usuario con la aplicación y es por esto que también he aprendido algunos conceptos sobre <span>UI/UX</span> que me ayudan a tener un panorama y entendimiento más grande del desarrollo.<br/>
                    Este campo de la tecnología es un mundo por eso me mantengo en <span>constante aprendizaje</span>, actualmente estoy estudiando de cursos manera de temas que complementen mis habilidades.<br/>
                    Mi meta es crear y contribuir en proyectos que tengan un cambio y mejoren la vida de las personas.<br/>
                    Me gustan los videojuegos, leer, el ajedrez y <i>"btw I use Arch"</i>
                </p>
                <a
                    className={styles.downloadCurriculum}
                    href="https://drive.google.com/file/d/15qMYDeleo_mP5zbxU2NDki37YOVjWI5t/view?usp=sharing"
                >Descarga mi CV
                    <FaArrowRight />
                </a>
            </div>
            <div className={styles.slider} data-aos="fade-up" data-aos-duration="1800">
                <div className={styles.tech}>
                    <div><img src={cssIcon} alt="css icon" /></div>
                    <div><img src={arch} alt="javascript icon" /></div>
                    <div><img src={figmaIcon} alt="figma icon" /></div>
                    <div><img src={reactIcon} alt="react icon" /></div>
                    <div><img src={mysql} alt="react icon" /></div>
                    <div><img src={git} alt="react icon" /></div>
                    <div><img src={node} alt="react icon" /></div>
                    <div><img src={python} alt="react icon" /></div>
                    <div><img src={typescript} alt="react icon" /></div>
                    <div><img src={cssIcon} alt="css icon" /></div>
                    <div><img src={arch} alt="javascript icon" /></div>
                    <div><img src={figmaIcon} alt="figma icon" /></div>
                    <div><img src={reactIcon} alt="react icon" /></div>
                    <div><img src={mysql} alt="react icon" /></div>
                    <div><img src={git} alt="react icon" /></div>
                    <div><img src={node} alt="react icon" /></div>
                    <div><img src={python} alt="react icon" /></div>
                    <div><img src={typescript} alt="react icon" /></div>
                </div>
                <div className={`${styles.tech} ${styles.tech2}`}>
                    <div><img src={mongo} alt="css icon" /></div>
                    <div><img src={tux} alt="javascript icon" /></div>
                    <div><img src={angular} alt="javascript icon" /></div>
                    <div><img src={sass} alt="javascript icon" /></div>
                    <div><img src={html} alt="figma icon" /></div>
                    <div><img src={jsIcon} alt="react icon" /></div>
                    <div><img src={github} alt="react icon" /></div>
                    <div><img src={vscode} alt="react icon" /></div>
                    <div><img src={mariadb} alt="react icon" /></div>
                    <div><img src={boostrap} alt="react icon" /></div>
                    <div><img src={mongo} alt="css icon" /></div>
                    <div><img src={tux} alt="javascript icon" /></div>
                    <div><img src={angular} alt="javascript icon" /></div>
                    <div><img src={sass} alt="javascript icon" /></div>
                    <div><img src={html} alt="figma icon" /></div>
                    <div><img src={jsIcon} alt="react icon" /></div>
                    <div><img src={github} alt="react icon" /></div>
                    <div><img src={vscode} alt="react icon" /></div>
                    <div><img src={mariadb} alt="react icon" /></div>
                    <div><img src={boostrap} alt="react icon" /></div>
                </div>
            </div>
        </section>
    )
}

export { About }