import { Fragment } from "react";
import Banner_costa from './componentes/BannerCosta';
import DescripcionCosta from "./componentes/DescripcionCosta";
import CCompra from './componentes/CCompra';
import Ica from './imagenes/Ica-Costa.jpg'
import './componentes/Costa.css';
import DesIca from './imagenes/Ica-Compra.jpg'


function PaginaIca() {
    
    return (
        <>
         <Banner_costa
            imagen={Ica}
            nombre = "Ica"
            />

            <div className="content">
                <DescripcionCosta
                imagen={DesIca}
                deDonde="De Lima a Ica."
                tiempo="En bus : 5 horas"
                precio="S/ 175"
                descripcion="Empezaremos el City Tour en Ica. Iremos al lugar con el apoyo de nuestros guias que les daran
                recomendaciones. Los lugares seleccionados seran visitados todo el dia, conociendo la variedad
                de actividades que hay en cada lugar de Ica."
                />

                {/*Contenido de la derecha */}

                <CCompra
                    actividad1="Visitar el Oasis de Huacachina"
                    actividad2="Hacer Sandboarding y paseos emn Buggy"
                    actividad3="Explorar la Bodega y Viñedos"
                    actividad4="Recorrer el Museo Regional de Ica"
                    actividad5="Visitar las Líneas de Nazca"
                    actividad6=" Explorar la Huaca de La Luna"
                    actividad7="Disfrutar de las Playas de Ica"
                    actividad8="Visitar el Santuario de Flora y Fauna de Paracas Visitar el Santuario de Flora y Fauna de Paracas"

                    recomendacion1="Lleve ropa ligera."
                    recomendacion2="Lleva gafas de sol y un sombrero o gorra."
                    recomendacion3="Zapatillas de montaña."
                    recomendacion4="Bloqueador solar."
                    recomendacion5="Mantente bien hidratado."
                />
                
            </div>
        </>
    );
}

export default PaginaIca;