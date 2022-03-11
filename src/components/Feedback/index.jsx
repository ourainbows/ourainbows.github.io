import styles from "./styles.module.css"
import bill from "../../assets/bill.jpg"

function Feedback() {
    return (
        <section className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.title}>Feedback</h2>
                <p className={styles.text}>Opiniones de clientes y compañeros de trabajo.</p>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <img src={bill} alt="bill" />
                    <p className={styles.cardTitle}>Bill Gates</p>
                    <p className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, repellendus voluptatum dignissimos architecto nobis assumenda delectus beatae velit magnam esse.</p>
                </div>
                <div className={styles.card}>
                    <img src={bill} alt="bill" />
                    <p className={styles.cardTitle}>Bill Gates</p>
                    <p className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, repellendus voluptatum dignissimos architecto nobis assumenda delectus beatae velit magnam esse.</p>
                </div>
                <div className={styles.card}>
                    <img src={bill} alt="bill" />
                    <p className={styles.cardTitle}>Bill Gates</p>
                    <p className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, repellendus voluptatum dignissimos architecto nobis assumenda delectus beatae velit magnam esse.</p>
                </div>
            </div>
        </section>
    )
}

export { Feedback }