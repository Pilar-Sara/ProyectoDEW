import React from 'react';
import Puntos from './componentes/Puntos.jsx'
import Testimonios_user from './componentes/Testimonios_user.jsx'
import Testimonios_coments from './componentes/Testimonios_coments.jsx';
function PaginaTestimonios() {

  return (
    <div>
      <Testimonios_user/>
      <Puntos/>
      <Testimonios_coments/>
    </div>
  );
}

export default PaginaTestimonios;