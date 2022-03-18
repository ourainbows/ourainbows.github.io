import styles from "./styles.module.css"
import vale from "../../assets/vale.jpeg"
import vale2 from "../../assets/vale2.jpg"

function Feedback() {
    return (
        <section className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.title}>Feedback</h2>
                <p className={styles.text}>Opiniones de clientes y compañeros de trabajo.</p>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <img src={vale} alt="persona" />
                    <p className={styles.cardName}>Valentina Garcia</p>
                    <p className={styles.cardTitle}>Emprendedora</p>
                    <p className={styles.cardText}>La atención es muy buena y personalizada se esfuerza en entender que quiere el cliente y lo que representa su marca para poderlo plasmas , me encanta que la página sea intuitiva ya que facilita demasiado la navegación.</p>
                </div>
                <div className={styles.card}>
                    <img src={vale2} alt="persona" />
                    <p className={styles.cardName}>Valentina Rippe</p>
                    <p className={styles.cardTitle}>Desarrolladora FullStack</p>
                    <p className={styles.cardText}>Siempre llegaba a tiempo con su trabajo y estaba dispuesto a ayudar incluso si no era su trabajo. Aprecié sus consejos y lo buscaría si necesitara una segunda opinión. Trabajaría con él de nuevo en cualquier momento. </p>
                </div>
                <div className={styles.card}>
                    <img src={vale} alt="persona" />
                    <p className={styles.cardTitle}>Bill Gates</p>
                    <p className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, repellendus voluptatum dignissimos architecto nobis assumenda delectus beatae velit magnam esse.</p>
                </div>
            </div>
        </section>
    )
}

export { Feedback }