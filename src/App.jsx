import { Route, Routes } from "react-router-dom";
// import './App.css'
import { Portada } from "./componentes/Portada";
import { About } from "./componentes/About";
import { Navegacion } from "./componentes/Navegacion";
import { Restoration } from "./componentes/Restoration";
import { Education } from "./componentes/Education";
import { Science } from "./componentes/Science";
import { Events } from "./componentes/Events";
import { Donate } from "./componentes/Donate";
import { Instagram } from "./redes/Instagram";
import { Facebook } from "./redes/Facebook";
import { Twitter} from "./redes/Twitter";
import { Linkedin } from "./redes/Linkedin";
import { Youtube } from "./redes/Youtube";

function App() {
  return (
    <>
      <div className="bg-slate-700  h-auto  flex items-center justify-around">
      </div>


      <Navegacion />
      <Routes>
        <Route path="/" element={<Portada />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/twitter" element={<Twitter />} />
        <Route path="/linkedin" element={<Linkedin />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/about" element={<About />} />
        <Route path="/restoration" element={<Restoration />} />
        <Route path="/education" element={<Education />} />
        <Route path="/science" element={<Science />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>


    </>
  );
}

export default App;
