import t_user_1 from '../imagenes/t_user_1.jpg'
import t_user_2 from '../imagenes/t_user_2.jpg'
import t_user_3 from '../imagenes/t_user_3.jpg'
import '../componentes/Testimonios.css'

function Testimonios_user() {
  
    return (
        <>
         <div className='section'>
            <h1>¿Qué dicen nuestros usuarios?</h1>
         
            <div className='misusuarios'>
                <div className="figura">
                    <figcaption> @Sonne_peruvian24</figcaption>
                    <div class="iconosU">
                        <img src={t_user_1} />
                    </div>     
                        <p className="textoU">
                        "Tuve un viaje maravilloso a Trujillo. Desde la asesoría 
                        inicial hasta el regreso a casa, todo fue perfecto. Me
                        proporcionaron una guía muy útil con información sobre 
                        cultura, transporte y lugares imprescindibles. Sin duda, 
                        volveré a contar con ellos para un futuro viaje con mi 
                        enamorada."
                        </p> <br /><br />
                        <p className="opinion"><strong>Excelente trabajo</strong></p>
                </div>
                <div className="figura">
                    <figcaption> @Gian_Marco</figcaption>
                    <div class="iconosU">
                        <img src={t_user_2} />
                    </div>     
                        <p className="textoU">
                        "Recomiendo encarecidamente a GW TRAVEL 
                        para cualquier viaje. Organizamos nuestras vacaciones 
                        familiares a Oxapampa con ellos y fue una experiencia 
                        sin estrés. Los boletos, el alojamiento y las reservas de 
                        restaurantes estaban perfectamente coordinados. Los niños 
                        se lo pasaron de maravilla y nosotros también."
                        </p> <br /><br />
                        <p className="opinion"><strong>¡Gracias por todo!</strong></p>
                </div>
                <div className="figura">
                    <figcaption> @Kimberly_Garcia</figcaption>
                    <div class="iconosU">
                        <img src={t_user_3} />
                    </div>     
                    <p className="textoU">
                        "El servicio al cliente es excepcional. Me ayudaron a 
                        reservar un viaje de última hora a Huancayo para
                        visitar a mi familia y no estar corriendo para organizar 
                        mi viaje, correr es a lo que estoy acostumbrada, pero no 
                        en este tipo de situaciones XD asi que se encargaron de 
                        todos los detalles,incluyendo traslados. La profesionalidad 
                        y la amabilidad de todo el equipo hicieron que todo el
                        proceso fuera sencillo y placentero."
                    </p>
                    <p className="opinion"><strong>Los recomiendo al 100%</strong></p>
                </div>
            </div>
        </div>
    </>
    );
  }
  
export default Testimonios_user;