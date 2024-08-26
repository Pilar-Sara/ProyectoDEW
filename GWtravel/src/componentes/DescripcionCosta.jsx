import { Fragment } from "react";
import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBus} from '@fortawesome/free-solid-svg-icons'

function descripcion ({ imagen, deDonde, tiempo, precio, descripcion, }) {
    return (
        <>
            <div className="left">
                    <img src={imagen} alt="" />
                    <h3>{deDonde}</h3>
                    <div>
                    <FontAwesomeIcon icon={faBus} />{tiempo}
                    </div>
                    <button className="precio" id="precio" value="145">{precio}</button>
                    <p className="descripcion">{descripcion}</p>

                    {/* Imprimir texto */}

                    <div className="box-resultado">
                        <button className="toggle-button" id="accion"></button>
                        <p className="toggle-text" id="imprimir-texto"></p>
                    </div>
            </div>
        </>
  )
}

export default descripcion;