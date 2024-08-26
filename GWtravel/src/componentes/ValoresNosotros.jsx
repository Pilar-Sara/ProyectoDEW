import React from 'react';
import '../componentes/EstilosNosotros.css';
import img1 from '../imagenes/puntualidad.png'
import img2 from '../imagenes/sostenibilidad.png'
import img3 from '../imagenes/calidad.png'
// Datos de ejemplo
const valores = [
  { title: 'Calidad', imgSrc: img1 ,  description: 'Ofrecemos servicios de la más alta calidad para asegurar tu satisfacción.' },
  { title: 'Seguridad', imgSrc: img2, description: 'Ofrecemos servicios de la más alta calidad para asegurar tu satisfacción.'  },
  { title: 'Garantía', imgSrc: img3, description: 'Ofrecemos servicios de la más alta calidad para asegurar tu satisfacción.'  }
];

function ValoresNosotros() {
  return (
    <>
        <h1 className="pilaresTit">NUESTROS VALORES</h1>
        <div className="pilares">
            {valores.map((valor, index) => (
            <figcaption key={index}>
                <h2>{valor.title}</h2>
                <img src={valor.imgSrc} alt={valor.title} />
                <p>{valor.description}</p>
            </figcaption>
            ))}
        </div>
    </>
  );
}

export default ValoresNosotros;