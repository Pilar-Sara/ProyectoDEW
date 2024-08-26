import React, { useState } from 'react';
import costa from '../imagenes/m-costa.png';
import sierra from '../imagenes/m-sierra.png';
import selva from '../imagenes/m-selva.png';
import mapa from '../imagenes/i-peru.png';
import mapaCosta from '../imagenes/i-costa.png'
import mapaSierra from '../imagenes/i-sierra.png'
import mapaSelva from '../imagenes/i-selva.png'

function MapaInicio() {
  const [imagenCentro, setImagenCentro] = useState(mapa);
  const [zoomClass, setZoomClass] = useState('');

  const cambiarImagenCentro = (nuevaSrc) => {
    setImagenCentro(nuevaSrc);
  };

  return (
    <div className="inicio-parrafo">
      <h1>Bienvenidos a GW TRAVEL</h1>
      <div id="inicio-regiones">
        <section className="izquierda">
          <a
            className="icosta"
            href=""
            onMouseEnter={() => { cambiarImagenCentro(mapaCosta); setZoomClass('zoom-in'); }}
            onMouseLeave={() => { cambiarImagenCentro(mapa); setZoomClass('zoom-out'); }}
          >
            <p>COSTA</p>
            <img src={costa} alt="Costa" />
          </a>
         
          <a
            className="isierra"
            href=""
            onMouseEnter={() => { cambiarImagenCentro(mapaSierra); setZoomClass('zoom-in'); }}
            onMouseLeave={() => { cambiarImagenCentro(mapa); setZoomClass('zoom-out'); }}
          >
           <p>SIERRA</p>
            <img src={sierra} alt="Sierra" />
          </a>
        </section>
        <section className="centro">
          <img id="imagen-centro" src={imagenCentro} alt="Centro" className={zoomClass} />
        </section>
        <section className="derecha">
          <a
            className="iselva"
            href=""
            onMouseEnter={() => { cambiarImagenCentro(mapaSelva); setZoomClass('zoom-in'); }}
            onMouseLeave={() => { cambiarImagenCentro(mapa); setZoomClass('zoom-out'); }}
          >
            <p>SELVA</p>
            <img src={selva} alt="Selva" />
          </a>
        </section>
      </div>
    </div>
  );
}

export default MapaInicio;