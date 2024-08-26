import { Fragment } from "react";
import './EstilosBlog.css'
import sierra from '../imagenes/sierra_blog.jpg'
import costa from '../imagenes/costa_blog.avif'
import selva from '../imagenes/selva_blog.jpg'




function ParteMedia ({mencionado, blog,deviajes, plane, tour, mundo, playas}){                              
    return (
        <>
        
        <section className ="tresimagen" id="contenedor"> 
            <div className="costa">     
                <img src={costa} alt=""/>
            </div> 
            <div className="sierra">
                <img src={sierra} alt="" />
            </div>
            <div className="selva">
                <img src={selva} alt=""/>
            </div>
        </section>
        
        <section className="titulos">
            <h1>COSTA</h1> <h1>SIERRA</h1>  <h1>SELVA</h1>
        </section>

<div className="intermedio">    
        <div className="uno"> <h2>{mencionado}</h2></div>
        <div className="linea-vertical"></div>
        <div className="dos"> <h2>{blog}</h2><h1>{deviajes}</h1></div>
        <div className="tres"><p>{plane} <strong>{tour} </strong></p></div>
        <div className="cuatro"> <h1>{mundo}</h1> </div>
        <div className="cinco"> <h1>{playas}</h1> </div>  
</div>
        </>
    );

}
export default ParteMedia;
