import { About } from './components/About';
import { Feedback } from './components/Feedback';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Work } from './components/Work';

import styles from './app.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main>
        <Home />
        <Services />
        <About />
        <Projects />
        <Feedback />
        <Work/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
