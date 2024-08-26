import { Fragment } from "react";
import './Costa.css'

function banner({imagen, nombre}){
    return(
        <>
            <div>
                <img  className="banner" src={imagen} alt="" />
                <button className="button">{nombre}</button><br />
            </div>
        </>
    )
}

export default banner;