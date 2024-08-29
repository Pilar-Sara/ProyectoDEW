import React from "react";
import imagen2 from '../imagenes/S-7colores.jpg'
import imagen3 from '../imagenes/S-Catedral.jpg'
import imagen1 from '../imagenes/S-Macchu.png'
import '../componentes/EstiloSierra.css'

function Sierra1({ Destinos, macchuText, boton1, montanaText, boton2, catedralText, boton3 }) {
  return (
    <>
      <section className="fondoS"> 
        <section className="DestacadosS">
          <h2>{Destinos}</h2>
          <div className="containerS">
            <div className="imagenS">
              <img src={imagen1} alt="Machu Picchu" />
              <h3>{macchuText}</h3>
              <button className="btn-fondoS">{boton1}</button>
            </div>
            <div className="imagenS">
              <img src={imagen2} alt="Montaña de Siete Colores" />
              <h3>{montanaText}</h3>
              <button className="btn-fondoS">{boton2}</button>
            </div>
            <div className="imagenS">
              <img src={imagen3} alt="Catedral de Paracas" />
              <h3>{catedralText}</h3>
              <button className="btn-fondoS">{boton3}</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Sierra1;

