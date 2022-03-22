import styles from "./styles.module.css"
import character from "../../assets/me.png"
import Typewriter from 'typewriter-effect';


function Home() {
    return (
        <section className={styles.home}>

            <div className={styles.container}>
                <div className={styles.gretting}>
                    <Typewriter
                        options={{
                            strings: [
                                "Hola mundo, yo soy",
                                "Helo world, I'm",
                                "Bonjour le monde, je suis",
                                "Olá mundo, eu sou",
                                "Hallo Welt, ich bin",
                                "Hei verden, jeg er",
                                "世界你好，我是",
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
                    <p>Desarrollador Frontend / UI 🖥️</p>
                </div>
                <div className={styles.btnsContainer}>
                    <a href="mailto:casasjuanfelipe@gmail.com" className={styles.btnContact}>Contactame</a>
                    <a href="https://drive.google.com/file/d/10kPdGVOkDHPERrnAetzgZeIYRzl38wxz/view" className={styles.btnCv}>CV</a>
                </div>
            </div>
            <div className={styles.characterContainer}>
                {/* 
                <svg className={styles.blob} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(230, 26, 121)"/>
                            <stop offset="100%" stopColor="rgb(248, 89, 89)"/>
                        </linearGradient>
                    </defs>
                    <path id="blob"  fill="url(#gradient)">
                        <animate attributeName="d"
                            dur="10000ms"
                            repeatCount="indefinite"
                            values="
                            M427,348Q363,446,253,440.5Q143,435,89.5,342.5Q36,250,85.5,150.5Q135,51,244.5,61Q354,71,422.5,160.5Q491,250,427,348Z;
                            M424,357.5Q374,465,255.5,455.5Q137,446,102,348Q67,250,106.5,160Q146,70,259.5,53.5Q373,37,423.5,143.5Q474,250,424,357.5Z;
                            M405,333.5Q347,417,247,422.5Q147,428,79.5,339Q12,250,86,171.5Q160,93,263,71Q366,49,414.5,149.5Q463,250,405,333.5Z;
                            M415.5,335.5Q349,421,239.5,439Q130,457,81.5,353.5Q33,250,91,162.5Q149,75,254,68.5Q359,62,420.5,156Q482,250,415.5,335.5Z;
                            M396,337Q350,424,256,413Q162,402,84.5,326Q7,250,70.5,150Q134,50,239,68Q344,86,393,168Q442,250,396,337Z;
                            M394,336.5Q350,423,255.5,413.5Q161,404,101.5,327Q42,250,90.5,154Q139,58,253.5,51.5Q368,45,403,147.5Q438,250,394,336.5Z;
                            M427,348Q363,446,253,440.5Q143,435,89.5,342.5Q36,250,85.5,150.5Q135,51,244.5,61Q354,71,422.5,160.5Q491,250,427,348Z;
                            "
                        ></animate>
                    </path>
                </svg>
                
                <svg className={styles.blobBlur} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(230, 26, 121)" />
                            <stop offset="100%" stopColor="rgb(248, 89, 89)" />
                        </linearGradient>
                    </defs>
                    <path id="blob" fill="url(#gradient)">
                        <animate attributeName="d"
                            dur="10000ms"
                            repeatCount="indefinite"
                            values="
                            M427,348Q363,446,253,440.5Q143,435,89.5,342.5Q36,250,85.5,150.5Q135,51,244.5,61Q354,71,422.5,160.5Q491,250,427,348Z;
                            M424,357.5Q374,465,255.5,455.5Q137,446,102,348Q67,250,106.5,160Q146,70,259.5,53.5Q373,37,423.5,143.5Q474,250,424,357.5Z;
                            M405,333.5Q347,417,247,422.5Q147,428,79.5,339Q12,250,86,171.5Q160,93,263,71Q366,49,414.5,149.5Q463,250,405,333.5Z;
                            M415.5,335.5Q349,421,239.5,439Q130,457,81.5,353.5Q33,250,91,162.5Q149,75,254,68.5Q359,62,420.5,156Q482,250,415.5,335.5Z;
                            M396,337Q350,424,256,413Q162,402,84.5,326Q7,250,70.5,150Q134,50,239,68Q344,86,393,168Q442,250,396,337Z;
                            M394,336.5Q350,423,255.5,413.5Q161,404,101.5,327Q42,250,90.5,154Q139,58,253.5,51.5Q368,45,403,147.5Q438,250,394,336.5Z;
                            M427,348Q363,446,253,440.5Q143,435,89.5,342.5Q36,250,85.5,150.5Q135,51,244.5,61Q354,71,422.5,160.5Q491,250,427,348Z;
                            "
                        ></animate>
                    </path>
                </svg>
               */}
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