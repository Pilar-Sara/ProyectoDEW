import React from 'react';
import '../componentes/EstilosNosotros.css';

function CuerpoNosotros() {

  return (
    <div className="n-cuerpo">
        <div className="n-izquierda">
            <h1>SOBRE NOSOTROS</h1>
            <p>Somos una agencia de turismo apasionada
               por mostrar lo mejor de Perú, desde las 
               playas doradas de la Costa hasta las
             majestuosas montañas de la Sierra y las
             exuberantes selvas de la Amazonía. Con
              más de 5 años de experiencia, 
              nos especializamos en crear itinerarios
           únicos que permiten a nuestros clientes 
           vivir la autenticidad de cada destino.

            </p>
        </div>

        <div className="n-centro">
            <h1>MISION</h1>
            <p>Nuestra misión es ofrecer experiencias
               de viaje inolvidables a través de un
                servicio personalizado y de calidad, 
                conectando a nuestros clientes con la
                 riqueza cultural, natural y gastronómica
              de las tres regiones del Perú: Costa, 
              Sierra y Selva. Nos comprometemos a
               promover el turismo responsable y 
              sostenible, apoyando a las comunidades 
              locales y preservando la biodiversidad.
              
            </p>
        </div>

        <div className="n-derecha">
            <h1>VISION</h1>
            <p>Aspiramos a ser la agencia de turismo
              líder en el mercado peruano, reconocida
              por nuestra excelencia en el servicio y
            por ofrecer destinos auténticos que 
            capturan la esencia de cada región del
            país. 
            </p>
        </div>
    </div>
  );
}

export default CuerpoNosotros;