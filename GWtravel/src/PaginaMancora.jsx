import { Fragment } from "react";
import Banner_costa from './componentes/BannerCosta';
import DescripcionCosta from "./componentes/DescripcionCosta";
import CCompra from './componentes/CCompra';
import Mancora from './imagenes/Mancora-Compra.webp'
import './componentes/Costa.css';
import DesMancora from './imagenes/Mancora-Compra.webp'


function PaginaMancora() {
    
    return (
        <>
         <Banner_costa
            imagen={Mancora}
            nombre = "Mancora"
            />

            <div className="content">
                <DescripcionCosta
                imagen={DesMancora}
                deDonde="De Lima a Talara"
                tiempo="En bus : 1h 30min hacia Mancora"
                precio="S/ 270"
                descripcion="  Empezaremos el City Tour en Talara luego se ira en un colectivo hacia mancora. Iremos al lugar con el apoyo de nuestros guias que les daran
                recomendaciones. Los lugares seleccionados seran visitados todo el dia, conociendo la variedad
                de actividades que hay en cada lugar de Ica."
                />

                {/*Contenido de la derecha */}

                <CCompra
                    actividad1="Disfrutar de las Playas"
                    actividad2="Practicar Surf"
                    actividad3="Hacer Kitesurfing y Windsurfing"
                    actividad4="Visitar la Isla de los Pájaros"
                    actividad5="Explorar la Reserva Nacional de los Manglares de Tumbes"
                    actividad6="Disfrutar de la Vida Nocturna"
                    actividad7="Relajarse en Spa y Centros de Bienestar"
                    actividad8="Hacer Excursiones a la Zona de Tumbes"

                    recomendacion1="Lleva ropa ligera. Incluye trajes de baño y prendas para actividades acuáticas."
                    recomendacion2="Chaqueta ligera para las noches frescas de Mancora."
                    recomendacion3="Sandalias de playa."
                    recomendacion4="Bloqueador solar."
                    recomendacion5="Dinero extra en Soles Peruanos."
                />
                
            </div>
        </>
    )
}

export default PaginaMancora;