import lamerced2 from '../imagenes/lamerced2.jpg'
import SanRamon2 from '../imagenes/SanRamon2.jpg'
import chachapoyas2 from '../imagenes/chachapoyas2.jpg'
import { Link } from 'react-router-dom';

function Selva3() {
    return (
    <>
    <div class="titulo">
        <h2>Paquetes para viajes de promoción</h2>
       </div>
       
    <div className="sectionSelva"> 
       <div className='figure'>
                <div class="portadas">
                   <img src={lamerced2} />
                </div>
                <div class="lugares">
                    <figcaption>
                        La Merced, Valle del Perené, Oxapampa 
                    </figcaption> <br />
                    <div class="dias">
                    <p>
                      3D/2N
                    </p>
                    </div>
                    <h3 class="precio">S/.530 por alumno</h3>
                <div class="paquete">
                    <Link to="/PaginaLaMerced">
                        <button type="button" onclick="paqute1()">
                        Ver paquete
                        </button>
                    </Link>
                </div>
                </div>
        </div>

    <div className='figure'>
            <div class="portadas">
              <img src={SanRamon2} />
            </div>
            <div class="lugares">
                <figcaption>
                    San Ramón, Pozuzo, 
                    La Merced,Valle del Perené
                </figcaption> <br />
                <div class="dias">
                <p>
                    4D/3N
                </p>
                </div>
                <h3 class="precio">S/.761 por alumno</h3>
                <div class="paquete">
                    <Link to="/PaginaPozuzo">
                        <button type="button" onclick="paqute1()">
                        Ver paquete
                        </button>
                    </Link>
                </div>
            </div>
    </div>
    <div className='figure'>
            <div class="portadas">
             <img src={chachapoyas2} />
            </div>
            <div class="lugares">
            <figcaption>
                Chachapoyas 
            </figcaption><br /><br/>
            <div class="dias">
                <p>
                    5D/3N
                </p>
            </div>
                <h3 class="precio">S/.980 por alumno</h3>
                <div class="paquete">
                    <Link to="/PaginaChachapoyas">
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
    
  export default Selva3;