import { Fragment } from "react";
import Banner_costa from './componentes/BannerCosta';
import DescripcionCosta from "./componentes/DescripcionCosta";
import CCompra from './componentes/CCompra';
import Nazca from './imagenes/Nazca-Costa.jpg'
import './componentes/Costa.css';
import DesNazca from './imagenes/Nazca-Costa.jpg'


function PaginaNazca() {
    
    return (
        <>
         <Banner_costa
            imagen={Nazca}
            nombre = "Nazca"
            />

            <div className="content">
                <DescripcionCosta
                imagen={DesNazca}
                deDonde="De Lima a Nazca"
                tiempo="En bus : 7 horas"
                precio="S/ 230"
                descripcion=" Empezaremos el City Tour en Nazca con el lugar que usted haya
                seleccionado. Iremos al lugar con el apoyo de nuestros guias que les daran
                recomendaciones. Los lugares seleccionados seran visitados todo el dia, conociendo la variedad
                de actividades que hay en cada lugar de Nazca."
                />

                {/*Contenido de la derecha */}

                <CCompra
                    actividad1="Sobrevolar las Líneas de Nazca"
                    actividad2=" Visitar el Museo Arqueológico Antonini"
                    actividad3="Explorar la Huaca de la Luna y el Templo de la Candelaria"
                    actividad4="Recorrer el Cementerio de Chauchilla"
                    actividad5="Visitar la Acueducto de Cantalloc"
                    actividad6="Navegar por el Circuito Mágico del Agua"
                    actividad7="Recorrer las Ruinas de Huaca Pucllana"
                    actividad8="Disfrutar del Mirador de las Líneas de Nazca"

                    recomendacion1="Lleve ropa ligera."
                    recomendacion2="Usa protector solar de alto factor"
                    recomendacion3="Zapatillas de montaña."
                    recomendacion4="ELleva agua contigo y mantente bien hidratado"
                    recomendacion5="Dinero extra en Soles Peruanos."
                />
                
            </div>
        </>
    )
}

export default PaginaNazca;