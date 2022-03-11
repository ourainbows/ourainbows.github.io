import styles from "./styles.module.css"

function Work() {
  return (
      <section className={styles.container}>
          <h3 className={styles.title}>¿Quieres trabajar conmigo?</h3>
          <p className={styles.text}>Sientente libre de mandarme un mensaje para contactarme.</p>
          <button className={styles.btn}>Contactame</button>
    </section>
  )
}

export {Work}