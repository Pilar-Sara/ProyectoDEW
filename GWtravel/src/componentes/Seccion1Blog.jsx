import { Fragment } from "react"
import './EstilosBlog.css'
import mancora from '../imagenes/mancora_blog.jpg'
import montana from '../imagenes/montanaColores_blog.jpg'
import lagotiticaca from '../imagenes/lagotiticaca_blog.jpg'


function Seccion1({mancorah1, textomancora, montanah1,textomontana,lagotiticacah1,textolago}) 
    {
    return(
        <section className="secuno">
            <div className="filablog">
                <div className="mancora">
                    <img src={mancora} alt=""/>
                    <h1>{mancorah1}</h1>
                    <p>{textomancora}</p>
                    <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="https://www.vivamancora.com/Peru/mancora-playa/" target="_blank">
                    Ver más...
                    <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
                    </a>
                </div>
                <div className="montana">
                    <img src={montana} alt=""/>
                    <h1>{montanah1}</h1>
                    <p>{textomontana}</p>
                    <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="https://www.peru.travel/es/masperu/vinicunca-la-hermosa-montana-de-los-siete-colores" target="_blank">
                    Ver más...
                    <svg className="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
                    </a>
                </div>
                <div className="lago">
                    <img src={lagotiticaca} alt=""/>
                    <h1>{lagotiticacah1}</h1>
                    <p>{textolago}</p>
                    <a className="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="https://patrimoniomundial.cultura.pe/listaindicativa/lago-titicaca" target="_blank">
                    Ver más...
                    <svg className="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
                    </a>
                </div>
            </div>
        </section>
);
}

export default Seccion1;