import { Fragment } from "react";
import Banner_costa from './componentes/BannerCosta';
import DescripcionCosta from "./componentes/DescripcionCosta";
import CCompra from './componentes/CCompra';
import Lima from './imagenes/Lima-Costa.jpg'
import './componentes/Costa.css';
import DesLima from './imagenes/Lima-Compra.jpg'


function PaginaLima() {
    
    return (
        <>
         <Banner_costa
            imagen={Lima}
            nombre = "Lima"
            />

            <div className="content">
                <DescripcionCosta
                imagen={DesLima}
                deDonde="Del aeropuerto Jorge Chavez a Miraflores."
                tiempo="En bus : 50 min"
                precio="S/ 145"
                descripcion="Empezaremos el City Tour en  <strong>Lima</strong>con el lugar que usted haya
                seleccionado. Iremos al lugar con el apoyo de nuestros guias que les daran
                recomendaciones. Los lugares seleccionados seran visitados todo el dia, conociendo la variedad
                de actividades que hay en cada lugar de Lima."
                />

                {/*Contenido de la derecha */}

                <CCompra
                    actividad1="Visitar el Centro Histórico"
                    actividad2="Disfrutar de la Gastronomía"
                    actividad3="Pasear por el Malecón de Miraflores"
                    actividad4="Explorar Barranco"
                    actividad5="Visitar el Museo Larco"
                    actividad6="Navegar por el Circuito Mágico del Agua"
                    actividad7="Recorrer las Ruinas de Huaca Pucllana"
                    actividad8="Degustar en una Ruta del Pisco Sour"

                    recomendacion1="Asegúrate de tener tu pasaporte válido."
                    recomendacion2="Casaca cortaviento, gorro, gafas, cantimplora."
                    recomendacion3="Lleva algo de efectivo y tarjetas de crédito, y cambia dinero en casas de cambio o bancos
                        oficiales."
                    recomendacion4="Bloqueador solar.."
                    recomendacion5="Dinero extra en Soles Peruanos."
                />
                
            </div>
        </>
    )
}

export default PaginaLima;