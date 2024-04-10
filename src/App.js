import './App.css';
import About from './Pages/About/About';
import Experiences from './Pages/Experiences/Experiences';
import Nav from './Pages/Nav/Nav';
import Services from './Pages/Services/Services';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="full_body">
     <About/>
     <Skills/>
     <Experiences/>
     <Services/>
     <Contact/>
    </div>
  );
}

export default App;
