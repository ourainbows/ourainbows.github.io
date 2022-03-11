import { About } from './components/About';
import { Feedback } from './components/Feedback';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Services } from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services />
        <About />
        <Projects />
        <Feedback/>
      </main>
    </>
  )
}

export default App;
