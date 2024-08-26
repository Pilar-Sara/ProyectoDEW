import React from 'react';
import BannerInicio from './componentes/BannerInicio';
import Redesflot from "./componentes/Redesflot.jsx";
import BienvenidaInicio from './componentes/BienvenidaInicio.jsx'
import Puntos from './componentes/Puntos.jsx'
import MapaInicio from './componentes/MapaInicio.jsx'
import MReservadosInicio from "./componentes/MreservadosInicio.jsx";
import ContactoInicio from './componentes/ContactoInicio.jsx'
import EscrituraInicio from './componentes/EscrituraInicio.jsx'

function PaginaInicio() {
  return (
    <div>
     <BannerInicio/>
     <EscrituraInicio/>
     <Redesflot/>
     <BienvenidaInicio/>
     <Puntos/>
     <MapaInicio/>
     <Puntos/>
     <MReservadosInicio/>
     <Puntos/>
     <ContactoInicio/>
     <Puntos/>
    </div>
  );
}

export default PaginaInicio;