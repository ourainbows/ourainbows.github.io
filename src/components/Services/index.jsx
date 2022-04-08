import styles from "./styles.module.css"
import { Service } from '../Service'
import { FaFeatherAlt} from "react-icons/fa"
import { BsStars} from "react-icons/bs"
import { BsHeartFill } from "react-icons/bs"
import { BsLightningChargeFill} from "react-icons/bs"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Services() {
    const services = [
        {
            title: "Desarrollo de Interfaces",
            text: "Interfaces de usuario originales, diferentes y con un toque único.",
            icon: <BsStars/>
        },
        {
            title: "Aplicaciones Dinámicas",
            text: "Aplicaciones web enfocadas en la interacción y el dinamismo.",
            icon: <BsLightningChargeFill/>
        },
        {
            title: "Aprendizaje Interminable",
            text: "Constante formación en lenguajes de programación y tecnologías para aportar nuevas y mejores soluciones.",
            icon: <BsHeartFill/>
        },
        {
            title: "Rendimiento Optimizado",
            text: "Buenas prácticas y código limpio para la escalabilidad y mantenibilidad del proyecto.",
            icon: <FaFeatherAlt/>
        },
    ]
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section id="services" className={styles.container}>
            <div className={styles.containerInfo} data-aos="fade-up" data-aos-duration="1800" >
                <h2>Mis Servicios</h2>
                <p>Algunas de mis habilidades destacadas</p>
            </div>
            <div className={styles.servicesContainer} data-aos="fade-up" data-aos-duration="2000">
                {services.map((item, i ) => (
                    <Service
                        key={i}
                        title={item.title}
                        text={item.text}
                        icon={item.icon} />
                ))}
            </div>
        </section>
    )
}

export {Services}