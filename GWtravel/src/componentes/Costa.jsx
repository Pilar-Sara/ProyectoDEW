import { Fragment } from "react";
import Banner_costa from './BannerCosta';
import DescripcionCosta from "./DescripcionCosta";
import CCompra from './CCompra';
import Lima from '../imagenes/Lima-logo.jpg';
import './Costa.css';
import DesLima from '../imagenes/Lima-Compra.jpg'


function costa() {
    
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
                    recomendacion1="Hola"
                    recomendacion2="Hola"
                />
                
            </div>
        </>
    )
}

export default costa;