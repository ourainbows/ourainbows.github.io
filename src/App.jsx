import { About } from './components/About';
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
        <Projects/>
      </main>
    </>
  )
}

export default App;
