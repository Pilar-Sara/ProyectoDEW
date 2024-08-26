import React from "react"
import contactanos from '../imagenes/inicio-contact.jpg'

function ContactoInicio() {
    return (
    <div className="contact">
        <section> <img src={contactanos} alt=""/>
        </section>
        <section>
            <h1>¿Tienes preguntas? conversa con un asesor</h1><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ullam, itaque dolores consectetur sit eveniet esse, 
                soluta reiciendis saepe vel, facilis illo iste. Ipsa 
                doloremque a voluptas praesent
                ium fugit ipsum deserunt.</p>
            <button>Contáctanos</button>
        </section>
    </div>
  );
}
export default ContactoInicio;