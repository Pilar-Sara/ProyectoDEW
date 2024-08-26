import React from 'react';
import EfectoEscritura from './EfectoEscritura';

function EscrituraInicio() {
  const titulos = ["Disfruta", "Explora", "Diviértete", "Viaja"];

  return (
    <div id="miContenedor">
      <section>
        <EfectoEscritura palabras={titulos} velocidad={100} borrarVelocidad={50} pausa={1000} />
      </section>
    </div>
  );
}

export default EscrituraInicio;