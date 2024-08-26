import React, { useState, useEffect } from 'react';

function EfectoEscritura({ palabras, velocidad = 100, borrarVelocidad = 50, pausa = 1000 }) {
  const [texto, setTexto] = useState('');
  const [indicePalabra, setIndicePalabra] = useState(0);
  const [borrando, setBorrando] = useState(false);

  useEffect(() => {
    const palabraActual = palabras[indicePalabra];
    let timeoutId;

    if (borrando) {
      // Borrando la palabra
      timeoutId = setTimeout(() => {
        setTexto(palabraActual.substring(0, texto.length - 1));
        if (texto === '') {
          setBorrando(false);
          setIndicePalabra((prev) => (prev + 1) % palabras.length);
        }
      }, borrarVelocidad);
    } 
    
    else {
      // Escribiendo la palabra
      timeoutId = setTimeout(() => {
        setTexto(palabraActual.substring(0, texto.length + 1));
        if (texto === palabraActual) {
          setTimeout(() => setBorrando(true), pausa);
        }
      }, velocidad);
    }

    return () => clearTimeout(timeoutId);
  }, [texto, borrando, palabras, velocidad, borrarVelocidad, pausa, indicePalabra]);

  return <h1 id="titulo">{texto}</h1>;
}

export default EfectoEscritura;