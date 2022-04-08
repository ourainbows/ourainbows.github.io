import styles from "./styles.module.css"
import character from "../../assets/me.png"
import Typewriter from 'typewriter-effect';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    }, []);
    return (
        <section className={styles.home}>
            <div className={styles.container} data-aos="fade-up">
                <div className={styles.gretting}>
                    <Typewriter
                        options={{
                            strings: [
                                "Hola mundo, yo soy",
                                "Hello world, I'm",
                                "Bonjour le monde, je suis",
                                "Olá mundo, eu sou",
                                "Hallo Welt, ich bin",
                                "Hei verden, jeg er",
                                "Ciao mondo, io sono"
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <span className={styles.grettingHand}> 👋🏼 </span>
                </div>
                <div className={styles.info}>
                    <h1>Juan Casas</h1>
                    <p>Desarrollador Frontend 🖥️</p>
                </div>
                <div className={styles.btnsContainer}>
                    <a href="mailto:casasjuanfelipe@gmail.com" className={styles.btnContact}>Contáctame</a>
                    <a href="https://drive.google.com/file/d/15qMYDeleo_mP5zbxU2NDki37YOVjWI5t/view?usp=sharing" className={styles.btnCv}>CV</a>
                </div>
            </div>
            <div className={styles.characterContainer} data-aos="fade-up">
                <svg className={styles.blob} width="514" height="572" viewBox="0 0 514 572" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M508.902 292.791C502.158 453.511 365.615 578.3 204.896 571.556C87.4721 566.628 -4.29951 467.42 0.627667 349.996L2.36801 308.521C9.80823 131.207 159.581 -6.5032 336.895 0.93702C438.476 5.19945 517.369 91.0028 513.107 192.584L508.902 292.791Z" fill="url(#paint0_linear_40_243)" />
                    <defs>
                        <linearGradient id="paint0_linear_40_243" x1="244.199" y1="573.205" x2="268.332" y2="-1.93993" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F85959" />
                            <stop offset="1" stopColor="#E61A7A" stopOpacity="0.92" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg className={styles.blobBlur} width="514" height="572" viewBox="0 0 514 572" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M508.902 292.791C502.158 453.511 365.615 578.3 204.896 571.556C87.4721 566.628 -4.29951 467.42 0.627667 349.996L2.36801 308.521C9.80823 131.207 159.581 -6.5032 336.895 0.93702C438.476 5.19945 517.369 91.0028 513.107 192.584L508.902 292.791Z" fill="url(#paint0_linear_40_243)" />
                    <defs>
                        <linearGradient id="paint0_linear_40_243" x1="244.199" y1="573.205" x2="268.332" y2="-1.93993" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F85959" />
                            <stop offset="1" stopColor="#E61A7A" stopOpacity="0.92" />
                        </linearGradient>
                    </defs>
                </svg>
                <img className={styles.characterBlur} src={character} alt="Personaje en 3d" />
                <img className={styles.character} src={character} alt="Personaje en 3d" />
            </div>
        </section>
    )
}

export { Home }