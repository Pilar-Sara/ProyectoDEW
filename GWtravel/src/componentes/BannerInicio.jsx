import React, { useState, useEffect } from 'react'; 
import fondo1 from '../imagenes/banner_0.jpg';
import fondo2 from '../imagenes/banner1.png';
import fondo3 from '../imagenes/banner2.png';

function BannerInicio() {
  // Índice de la imagen
  const [indiceImg, nuevaImg] = useState(0);

  // Array de imágenes
  const imagen = [fondo1, fondo2, fondo3];
  const parrafos = [
    "DESCUBRE TU PRÓXIMO DESTINO",
    "EXPLORA NUEVAS AVENTURAS",
    "VIAJA POR EL PERÚ"
    ];

  useEffect(() => {
    // Función para rotar la imagen
    const rotarImagen = () => {
      nuevaImg((indicePrevio) => (indicePrevio + 1) % imagen.length);
    };

    // Iniciar la rotación cada segundo
    const intervaloId = setInterval(rotarImagen, 3000);

    // Agregamos console.log para depuración
    console.log(`Imagen actual: ${imagen[indiceImg]}`);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervaloId);
  }, [indiceImg, imagen]); // Aseguramos que se vuelva a ejecutar el efecto cuando cambie el índice o las imágenes

  return (
    <div className="container">
        <div id="miBanner">
            <section>
            <img id="imagenBanner" src={imagen[indiceImg]} alt={`Banner ${indiceImg}`} />
            <p id="parrafoBanner">{parrafos[indiceImg]}</p>
            </section>
        </div>

        <div className="b-lineas">
            <div className="lineas" onClick={() => nuevaImg(0)}></div>
            <div className="lineas" onClick={() => nuevaImg(1)}></div>
            <div className="lineas" onClick={() => nuevaImg(2)}></div>
        </div>

    </div>
  );
}
export default BannerInicio;