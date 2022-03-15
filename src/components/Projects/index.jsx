import styles from "./styles.module.css"
import ScrollContainer from 'react-indiana-drag-scroll'


function Projects() {
    return (
        <section id="projects" className={styles.sectionProjects}>
            <h2 className={styles.title}>Proyectos</h2>
            <div className={styles.containerProjects}>
                {/* mirar el end scroll mas la posicion en x */}
                <ScrollContainer className={styles.container}>
                   <div className={styles.project}></div>
                   <div className={styles.project}></div>
                   <div className={styles.project}></div>
                   <div className={styles.project}></div>
                   <div className={styles.project}></div>
                   <div className={styles.project}></div>
                   <div className={styles.project}></div>
                </ScrollContainer>
            </div>

        </section>
    )
}

export { Projects }