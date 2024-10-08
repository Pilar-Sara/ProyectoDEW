import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu.jsx'
import PaginaInicio from './PaginaInicio.jsx'
import PaginaNosotros from './PaginaNosotros.jsx'
import PaginaSelva from './PaginaSelva.jsx'
import PaginaSierra from './PaginaSierra.jsx'
import PaginaTestimonios from './PaginaTestimonios.jsx'
import Footer from "./componentes/Footer.jsx";
import PaginaBlog from './PaginaBlog.jsx'
import PaginaDestino from './PaginaDestino.jsx'
import PaginaCosta from "./PaginaCosta.jsx";
import PaginaLima from './PaginaLima.jsx'
import PaginaParacas from "./PaginaParacas.jsx";
import PaginaIca from "./PaginaIca.jsx";
import PaginaContacto from "./PaginaContacto.jsx";
import PaginaNazca from "./PaginaNazca.jsx";
import PaginaMancora from "./PaginaMancora.jsx";
import PaginaTumbes from "./PaginaTumbes.jsx";
import PaginaOxapampa from "./PaginaOxapampa.jsx";
import PaginaIquitos from "./PaginaIquitos.jsx";
import PaginaChanchamayo from "./PaginaChanchamayo.jsx";
import PaginaLaMerced from "./PaginaLaMerced.jsx";
import PaginaPozuzo from "./PaginaPozuzo.jsx";
import PaginaChachapoyas from "./PaginaChachapoyas.jsx";

function App(){
  return(
    <>
      
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<PaginaInicio/>} />
          <Route path="/PaginaNosotros" element={<PaginaNosotros/>} />
          <Route path="/PaginaSelva" element={<PaginaSelva/>} />
          <Route path="/PaginaSierra" element={<PaginaSierra/>}/>
          <Route path="/PaginaTestimonios" element={<PaginaTestimonios/>} />
          <Route path="/PaginaBlog" element={<PaginaBlog/>} />
          <Route path="/PaginaDestino" element={<PaginaDestino/>} />
          <Route path="/PaginaCosta" element={<PaginaCosta/>} />
          <Route path="/PaginaLima" element={<PaginaLima/>} />
          <Route path="/PaginaParacas" element={<PaginaParacas/>} />
          <Route path="/PaginaContacto" element={<PaginaContacto/>} />
          <Route path="/PaginaIca" element={<PaginaIca/>} />
          <Route path="/PaginaNazca" element={<PaginaNazca/>} />
          <Route path="/PaginaMancora" element={<PaginaMancora/>} />
          <Route path="/PaginaTumbes" element={<PaginaTumbes/>} />
          <Route path="/PaginaOxapampa" element={<PaginaOxapampa/>} />
          <Route path="/PaginaIquitos" element={<PaginaIquitos/>} />
          <Route path="/PaginaChanchamayo" element={<PaginaChanchamayo/>} />
          <Route path="/PaginaLaMerced" element={<PaginaLaMerced/>} />
          <Route path="/PaginaPozuzo" element={<PaginaPozuzo/>} />
          <Route path="/PaginaChachapoyas" element={<PaginaChachapoyas/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
export default App;