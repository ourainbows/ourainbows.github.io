import styles from "./styles.module.css"
import { FaArrowRight } from "react-icons/fa"
import cssIcon from "../../assets/cssIcon.svg"
import jsIcon from "../../assets/jsIcon.svg"
import figmaIcon from "../../assets/figmaIcon.svg"
import reactIcon from "../../assets/reactIcon.svg"

function About() {
    return (
        <section id="aboutMe" className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.title}>Acerca de mi</h2>
                <p className={styles.text}>
                    Mi nombre es Juan Felipe Casas, soy un desarrollador web enfocado al area del frontend, me encanta trabajar con  React.Js y CSS.<br />
                    Paralamente tengo conocimientos en UI / UX y en el backend. <br />
                    Me gusta mantenerme en constante aprendienmiento.
                </p>
                <a
                    className={styles.downloadCurriculum}
                    href="https://drive.google.com/file/d/10kPdGVOkDHPERrnAetzgZeIYRzl38wxz/view"
                >Descarga mi CV  
                    <FaArrowRight/>
                </a>
            </div>
            <div className={styles.tech}>
                <div><img src={cssIcon} alt="css icon" /></div>
                <div><img src={jsIcon} alt="javascript icon" /></div>
                <div><img src={figmaIcon} alt="figma icon" /></div>
                <div><img src={reactIcon} alt="react icon" /></div>
            </div>
        </section>
    )
}

export { About }