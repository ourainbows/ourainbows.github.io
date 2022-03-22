import styles from "./styles.module.css"
import vale from "../../assets/vale.webp"
import vale2 from "../../assets/vale2.webp"
import Tilt from 'react-parallax-tilt';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function Feedback() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    /*     const [positionY, setPositionY] = useState("7")
    
        const handleResize = () => {
            // tiltAngleYInitial={`-7`}
            console.log(window.innerWidth)
            if (window.innerWidth < 747) {
                setPositionY("0")
            } else {
                setPositionY("7")
            }
        }
           useEffect(() => {
            handleResize()
        },[]) */
    return (
        <section className={styles.container} id="feedback">
            <div className={styles.info} data-aos="fade-up" data-aos-duration="1800">
                <h2 className={styles.title}>Feedback</h2>
                <p className={styles.text}>Opiniones de clientes y compañeros de trabajo.</p>
            </div>
            <div className={styles.cardsContainer}>

                <Tilt
                    className={styles.card}
                    gyroscope={true} >
                    <img src={vale} alt="persona" />
                    <p className={styles.cardName}>Valentina Garcia</p>
                    <p className={styles.cardTitle}>Emprendedora</p>
                    <p className={styles.cardText}>La atención es muy buena y personalizada se esfuerza en entender que quiere el cliente y lo que representa su marca para poderlo plasmas , me encanta que la página sea intuitiva ya que facilita demasiado la navegación.</p>
                </Tilt>

                <Tilt
                    className={styles.card}
                    gyroscope={true} >
                    <img src={vale2} alt="persona" />
                    <p className={styles.cardName}>Valentina Rippe</p>
                    <p className={styles.cardTitle}>Desarrolladora FullStack</p>
                    <p className={styles.cardText}>Siempre llegaba a tiempo con su trabajo y estaba dispuesto a ayudar incluso si no era su trabajo. Aprecié sus consejos y lo buscaría si necesitara una segunda opinión. Trabajaría con él de nuevo en cualquier momento. </p>
                </Tilt>
                {/*  <Tilt className={styles.card}>
                    <img src={vale} alt="persona" />
                    <p className={styles.cardTitle}>Bill Gates</p>
                    <p className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, repellendus voluptatum dignissimos architecto nobis assumenda delectus beatae velit magnam esse.</p>
                </Tilt> */}
            </div>
        </section>
    )
}

export { Feedback }