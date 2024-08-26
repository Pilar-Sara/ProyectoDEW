import oxapampa2 from '../imagenes/oxapampa2.jpg'
import iquitos2 from '../imagenes/iquitos2.jpg'
import chanchamayo2 from '../imagenes/chanchamayo2.jpg'
import { Link } from 'react-router-dom';
import './Region_selva.css'
function Selva2() {
    return (
    <>
    <div class="titulo">
         <h2>Paquetes en oferta</h2>
        </div>
    <div className="sectionSelva">
        <div className="figure">
            <div class="portadas">
                <img src={oxapampa2} />
            </div> 
                <div class="lugares">
                    <figcaption>
                    Oxapampa,Pozuzo y Villa Rica  
                    </figcaption><br />
                    <div class="dias">
                        <p>
                           3D/2N
                        </p>
                    </div>
                    <h3 class="precio">S/.295</h3>
                    <div class="paquete">
                    <Link to="/PaginaOxapampa">
                        <button type="button" onclick="paqute1()">
                        Ver paquete
                        </button>
                    </Link>
                    </div>   
                </div>

        </div>
        <div className="figure">
            <div class="portadas">
                <img src={iquitos2} />
            </div> 
                <div class="lugares">
                    <figcaption>
                    Oxapampa,Pozuzo y Villa Rica  
                    </figcaption><br />
                    <div class="dias">
                        <p>
                        5D/4N
                        </p>
                    </div>
                    <h3 class="precio">S/.670</h3>
                    <div class="paquete">
                    <Link to="/PaginaIquitos">
                        <button type="button" onclick="paqute1()">
                        Ver paquete
                        </button>
                    </Link> 
                    </div>   
                </div>

        </div>
        <div className="figure">
            <div class="portadas">
                <img src={chanchamayo2} />
            </div> 
                <div class="lugares">
                    <figcaption>
                    Chanchamayo, Oxapampa,Pozuzo
                     y Villa Rica   
                    </figcaption><br />
                    <div class="dias">
                        <p>
                        5D/4N
                        </p>
                    </div>
                    <h3 class="precio">S/.295</h3>
                    <div class="paquete">
                    <Link to="/PaginaChanchamayo">
                        <button type="button" onclick="paqute1()">
                        Ver paquete
                        </button>
                    </Link> 
                    </div>   
                </div>
        </div>
    </div>

    </>
      )
    }
    
  export default Selva2;