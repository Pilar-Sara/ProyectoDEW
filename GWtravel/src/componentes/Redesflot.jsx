import React from "react";
import ws from '../imagenes/i-ws.png'
import correo from '../imagenes/i-corr.png'
import mss from '../imagenes/i-mss.png'

function Redesflot (){
return(
      <div className="redes">
        <div className="boton"><img src={ws} alt="" /></div>
        <div className="boton"><img src={correo} alt="" /></div>
        <div className="boton"><img src={mss} alt="" /></div>
      </div>
    )
}
export default Redesflot;