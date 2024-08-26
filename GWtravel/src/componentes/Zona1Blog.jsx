import { Fragment } from "react";
import './EstilosBlog.css'

function Zona1 (){
   
    return(
        <>
        <div className="Zona1">
            <h1>VIAJA POR TODO EL PERÚ</h1>       
        </div>
        <div className="linea-horizontal_1"></div>
         <section className="parrafo" >
            <h2> Si algo bueno te pasa, viaja para celebrar. 
            Si algo malo te pasa, viaja para olvidar. Si 
            nada te pasa, viaja para que algo pase.</h2>    
        </section>
        <div className="linea-horizontal"><hr/></div>
        <div className="videoBlog">
            <div class="ratio ratio-16x9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Yw8foJOadQw?si=jPEDJuz1thGvlOgj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        </>
    );

}
export default Zona1;