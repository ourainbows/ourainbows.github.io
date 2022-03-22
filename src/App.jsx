import { About } from './components/About';
import { Feedback } from './components/Feedback';
import { Footer } from './components/Footer';
import { GoTop } from './components/GoTop';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Work } from './components/Work';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services />
        <About />
        <Projects />
        <Feedback />
        <Work />
      </main>
      <Footer />
      <GoTop/>
    </>
  )
}

export default App;
