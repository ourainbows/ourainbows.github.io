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
            text: "Desarrollo de interfaces (UI) con herramientas enfocadas a esta actividad.",
            icon: <BsStars/>
        },
        {
            title: "Aplicaciones Dinamicas",
            text: "Aplicaciones web enfocadas en la interacción y el dinamismo.",
            icon: <BsLightningChargeFill/>
        },
        {
            title: "Diseños Unicos",
            text: "Amo trabajar con CSS y dar un toque especial en el proyecto que este trabajando.",
            icon: <BsHeartFill/>
        },
        {
            title: "Codigo Limpio",
            text: "Manteniendo buenas practicas y codigo limpio para la escalabilidad y mantenelibidad",
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
                <p>Lo que se y amo hacer</p>
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