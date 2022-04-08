import styles from "./styles.module.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Work() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className={styles.container}>
      <h3 className={styles.title} data-aos="fade-up" data-aos-duration="1800">¿Quieres trabajar conmigo?</h3>
      <p className={styles.text} data-aos="fade-up" data-aos-duration="1800">Te invito a enviar un mensaje para ponernos en contacto.</p>
      <a
        href="mailto:casasjuanfelipe@gmail.com"
        className={styles.btn}
        data-aos="fade-up"
        data-aos-duration="5000"
      >
        Contáctame
      </a>
    </section>
  )
}

export { Work }