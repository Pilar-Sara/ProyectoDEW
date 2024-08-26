import { Fragment } from "react";
import Banner_costa from './componentes/BannerCosta';
import DescripcionCosta from "./componentes/DescripcionCosta";
import CCompra from './componentes/CCompra';
import Chanchamayo from './imagenes/chanchamayo2.jpg'
import './componentes/Costa.css';
import Deschan from './imagenes/chanchamayo3.jpg'


function PaginaChanchamayo() {
    
    return (
        <>
         <Banner_costa
            imagen={Chanchamayo}
            nombre = "Chanchamayo"
            />

            <div className="content">
                <DescripcionCosta
                imagen={Deschan}
                deDonde="De Lima a Ica."
                tiempo="En bus : 5 horas"
                precio="S/ 670"
                descripcion="Empezaremos el City Tour en Ica. Iremos al lugar con el apoyo de nuestros guias que les daran
                recomendaciones. Los lugares seleccionados seran visitados todo el dia, conociendo la variedad
                de actividades que hay en cada lugar de Ica."
                />

                {/*Contenido de la derecha */}

                <CCompra
                    actividad1="La CATARATA EL TIROL"
                    actividad2="Visitaremos un MARIPOSARIO"
                    actividad3="CVisitaremos el PUENTE COLGANTE KIMIRI"
                    actividad4="Ingreso de la CATARATA BAYOZ"
                    actividad5="La CATARATA VELO DE NOVIA"
                    actividad6="Distrito de CHONTABAMBA, MIRADOR LA FLORIDA "
                    actividad7="PARQUE NACIONAL YANACHAGA-CHEMILLÉN "
                    actividad8="La FÁBRICA DE CERVEZA"

                    recomendacion1="Viste ropa ligera y de manga larga para protegerte de 
                insectos."
                    recomendacion2="Una mochila o maletín liviano por persona."
                    recomendacion3="Protector solar, sombrero para los días de sol-Baston de Trekking"
                    recomendacion4="Respeta la flora y fauna local, 
                mantente en los senderos designados 
                y sigue las indicaciones de tu guía"
                    recomendacion5="Lleva suficiente agua potable y algún 
                sistema de purificación de agua."
                />
                
            </div>
        </>
    );
}

export default PaginaChanchamayo;