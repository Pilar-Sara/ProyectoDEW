import { Fragment } from "react";
import manglares from '../imagenes/manglares_blog.jpg'
import colca from '../imagenes/colca_blog.jpg'
import oasis from '../imagenes/oasis_blog.jpg'


function Section2 ({manglaresh1, textomanglares, elcanonh1, textoelcanon,oasish1,textooasis}){

    return(
        <>
    <section className="secdos">
            <div className="filablogdos">
                <div className="manglares">
                    <img src={manglares} alt=""/>
                    <h1>{manglaresh1}</h1>
                    <p>{textomanglares}</p>
                    <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="https://www.ytuqueplanes.com/blog-viajero/tumbes/los-manglares-de-tumbes-cinco-razones-que-lo-hacen-inolvidable" target="_blank">
                    Ver más...
                    <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
                    </a>
                </div>
                <div className="colca">
                    <img src={colca} alt=""/>
                    <h1>{elcanonh1} </h1>
                    <p>{textoelcanon}</p>
                    <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="https://www.incasperu.com/consejos-antes-viajar-canon-del-colca-arequipa-peru/" target="_blank">
                    Ver más...
                    <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
                    </a>
                </div>
                <div className="oasis">
                    <img src={oasis} alt=""/>
                    <h1>{oasish1}</h1>
                    <p>{textooasis} </p>
                    <a class="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" href="https://www.huacachina.com/es/como-llegar-a-huacachina/" target="_blank">
                    Ver más...
                    <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
                    </a>
                </div>
                    </div>
     </section>    
        
        </>
    );
}

export default Section2;