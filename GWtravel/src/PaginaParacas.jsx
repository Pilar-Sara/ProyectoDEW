import { Fragment } from "react";
import Banner_costa from './componentes/BannerCosta';
import DescripcionCosta from "./componentes/DescripcionCosta";
import CCompra from './componentes/CCompra';
import Paracas from './imagenes/Paracas-Costa.jpg'
import './componentes/Costa.css';
import DesParac from './imagenes/Paracas-Compra.jpg'


function PaginaParacas() {
    
    return (
        <>
         <Banner_costa
            imagen={Paracas}
            nombre = "Paracas"
            />

            <div className="content">
                <DescripcionCosta
                imagen={DesParac}
                deDonde="De Lima a Paracas."
                tiempo="En bus : 4 horas"
                precio="S/ 165"
                descripcion="Empezaremos el City Tour en luego se ira a Paracas. Iremos al lugar con el apoyo de nuestros guias que les daran
                recomendaciones. Los lugares seleccionados seran visitados todo el dia, conociendo la variedad
                de actividades que hay en cada lugar de Paracas."
                />

                {/*Contenido de la derecha */}

                <CCompra
                    actividad1="Visitar las Islas Ballestas"
                    actividad2="Explorar la Reserva Nacional de Paracas"
                    actividad3="Disfrutar de la Playa de La Mina"
                    actividad4="Recorrer el Circuito Turístico de Paracas"
                    actividad5="Paseo en Bote al Atardecer"
                    actividad6="Visitar el Museo de la Reserva Nacional de Paracas"
                    actividad7="Recorrer las Ruinas de Huaca Pucllana"
                    actividad8="Hacer Sandboarding en las Dunas"

                    recomendacion1="Lleva ropa ligera y cómoda,chaqueta ligera o suéter para las noches frescas y posibles cambios de temperatura."
                    recomendacion2="Gafas de sol, y un sombrero o gorra para protegerte del sol.."
                    recomendacion3="Zapatillas de montaña."
                    recomendacion4="Bloqueador solar"
                    recomendacion5="Dinero extra en Soles Peruanos."
                />
                
            </div>
        </>
    )
}

export default PaginaParacas;