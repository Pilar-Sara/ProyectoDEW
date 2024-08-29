import { Fragment } from "react";
import Sierra1 from "./componentes/Sierra1";
import Sierra2 from "./componentes/Sierra2";
import Sierra3 from './componentes/Sierra3'

function sierra(){
    return(
        <>
            <Sierra1
            Destinos="Sierra"
            
            boton1="Macchu picchu"
            boton2="Montaña de 7 colores"
            
            boton3="Catedral"
            />
            <Sierra3/>
            <Sierra2/>
        </>
    )
}

export default sierra;