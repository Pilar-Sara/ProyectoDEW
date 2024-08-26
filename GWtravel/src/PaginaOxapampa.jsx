import { Fragment } from "react";
import Banner_costa from './componentes/BannerCosta';
import DescripcionCosta from "./componentes/DescripcionCosta";
import CCompra from './componentes/CCompra';
import Ica from './imagenes/Ica-Costa.jpg'
import './componentes/Costa.css';
import DesIca from './imagenes/Ica-Compra.jpg'


function PaginaOxapampa() {
    
    return (
        <>
         <Banner_costa
            imagen={Ica}
            nombre = "Oxapampa"
            />

            <div className="content">
                <DescripcionCosta
                imagen={DesIca}
                deDonde="De Lima a Oxapampa."
                tiempo="En bus : 5 horas"
                precio="S/ 295"
                descripcion="Empezaremos el City Tour en Ica. Iremos al lugar con el apoyo de nuestros guias que les daran
                recomendaciones. Los lugares seleccionados seran visitados todo el dia, conociendo la variedad
                de actividades que hay en cada lugar de Ica."
                />

                {/*Contenido de la derecha */}

                <CCompra
                    actividad1="Visita la PLAZA PRINCIPAL DE OXAPAMPA e IGLESIA SANTA ROSA"
                    actividad2="MIRADOR LA FLORIDA en el distrito de CHONTABAMBA"
                    actividad3="Recorrer las instalaciones de una DESTILERÍA"
                    actividad4="Visitar POZUZO “COLONIA AUSTRO-ALEMANA”"
                    actividad5="Cataratas RAYANTAMBO y YULITUNQUI en el distrito de  Huancabamba "
                    actividad6="PARQUE NACIONAL YANACHAGA-CHEMILLÉN "
                    actividad7="POZAS DE AGUAS CRISTALINAS "
                    actividad8="PUENTE COLGANTE EMPERADOR GUILLERMO"

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

export default PaginaOxapampa;