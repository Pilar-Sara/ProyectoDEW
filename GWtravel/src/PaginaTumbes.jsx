import { Fragment } from "react";
import Banner_costa from './componentes/BannerCosta';
import DescripcionCosta from "./componentes/DescripcionCosta";
import CCompra from './componentes/CCompra';
import Tumbes from './imagenes/Tumbez-Costa.jpg'
import './componentes/Costa.css';
import DesLima from './imagenes/Tumbez-Costa.jpg'


function PaginaTumbes() {
    
    return (
        <>
         <Banner_costa
            imagen={Tumbes}
            nombre = "Tumbes"
            />

            <div className="content">
                <DescripcionCosta
                imagen={DesLima}
                deDonde="De Lima a Tumbez"
                tiempo="En bus : 20 horas"
                precio="S/ 295"
                descripcion="Empezaremos el City Tour en Tumbez. Los lugares seleccionados seran visitados todo el dia, conociendo la variedad
                de actividades que hay en cada lugar de Tumbez."
                />

                {/*Contenido de la derecha */}

                <CCompra
                    actividad1="Visitar la Reserva Nacional de los Manglares de Tumbes"
                    actividad2="Relajarse en las Playas de Tumbes"
                    actividad3="Visitar la Laguna de Zorrito"
                    actividad4="Conocer el Santuario Nacional Manglares de Tumbes"
                    actividad5="Visitar el Museo Larco"
                    actividad6="Explorar el Centro Histórico de Tumbes"
                    actividad7="Visitar el Mercado de Tumbes"
                    actividad8="Realizar Actividades de Ecoturismo"

                    recomendacion1="Lleve ropa ligera"
                    recomendacion2="Pastillas antihistamínicas y antiinflamatorias para picaduras de mosquitos."
                    recomendacion3="Linterna, repelente."
                    recomendacion4="Bloqueador solar."
                    recomendacion5="Dinero extra en Soles Peruanos."
                />
                
            </div>
        </>
    )
}

export default PaginaTumbes;