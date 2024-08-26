import { Fragment } from "react";
import Banner_costa from './componentes/BannerCosta';
import DescripcionCosta from "./componentes/DescripcionCosta";
import CCompra from './componentes/CCompra';
import Ica from './imagenes/Ica-Costa.jpg'
import './componentes/Costa.css';
import DesIca from './imagenes/Ica-Compra.jpg'


function PaginaIquitos() {
    
    return (
        <>
         <Banner_costa
            imagen={Ica}
            nombre = "Iquitos"
            />

            <div className="content">
                <DescripcionCosta
                imagen={DesIca}
                deDonde="De Lima a Ica."
                tiempo="En bus : 5 horas"
                precio="S/ 670"
                descripcion="Empezaremos el City Tour en Ica. Iremos al lugar con el apoyo de nuestros guias que les daran
                recomendaciones. Los lugares seleccionados seran visitados todo el dia, conociendo la variedad
                de actividades que hay en cada lugar de Ica."
                />

                {/*Contenido de la derecha */}

                <CCompra
                    actividad1="Visita a las casas flotantes "
                    actividad2="Navegación por el río Amazonas"
                    actividad3="Caminata por selva primaria conociendo flora y fauna."
                    actividad4="Tour por el río Amazonas para buscar los delfines grises y rosados "
                    actividad5="CVisita a familia ribereña donde preservan algunas especies de animales "
                    actividad6="Bebidas típicas afrodisíacas con poder medicinal. "
                    actividad7="Puesta del sol sobre el Amazonas."
                    actividad8="Visita al grupo nativo Yagua "

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

export default PaginaIquitos;