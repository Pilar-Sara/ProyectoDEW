import { Fragment } from "react";
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import limaCosta from '../imagenes/Lima-Costa.jpg'
import paracasCosta from '../imagenes/Paracas-Costa.jpg'
import icaCosta from '../imagenes/Ica-Costa.jpg'
import nazcaCosta from '../imagenes/Nazca-Costa.jpg'
import mancoraCosta from '../imagenes/Playa-Mancora.jpg'
import tumbezCosta from '../imagenes/Tumbez-Costa.jpg'
import { Link } from 'react-router-dom';
import './DestinoCosta.css'

function destinoCosta() {
    // Inicializamos un array de estados con valores `false` para todos los destinos
    const [favStates, setFavStates] = useState(Array(6).fill(false));

    const toggleFav = (index) => {
        const newFavStates = [...favStates];
        newFavStates[index] = !newFavStates[index]; // Alternamos el estado del corazón en el índice específico
        setFavStates(newFavStates);
    };

    return (
        <>
            <section id="destinos" className="galeria">
                {/* DESTINO 1 */}
                <div className="destino">
                    <img src={limaCosta} alt="Lima" />
                    <h3>Lima</h3>
                    <p>Explora las riquezas de Lima.</p>
                    <br /><br />
                    <Link to="/PaginaLima">Ir a destino <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <FontAwesomeIcon 
                        icon={faHeart}
                        style={{ color: favStates[0] ? 'red' : 'gray', cursor: 'pointer' }}
                        onClick={() => toggleFav(0)}
                    />
                </div>

                {/* DESTINO 2 */}
                <div className="destino">
                    <img src={paracasCosta} alt="Paracas" />
                    <h3>Paracas</h3>
                    <p>Paracas, donde el desierto se encuentra con el océano.</p><br />
                    
                    <Link to="/PaginaParacas">Ir a destino <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <FontAwesomeIcon
                        icon={faHeart}
                        style={{ color: favStates[1] ? 'red' : 'gray', cursor: 'pointer' }}
                        onClick={() => toggleFav(1)}
                    />
                </div>

                {/* DESTINO 3 */}
                <div className="destino">
                    <img src={icaCosta} alt="Ica" />
                    <h3>Ica</h3>
                    <p>
                        El desierto cobra vida con sus imponentes dunas y el encantador
                        oasis de Huacachina.
                    </p>
                        <Link to="/PaginaIca">Ir a destino <FontAwesomeIcon icon={faArrowRight} />
                        </Link>

                    <FontAwesomeIcon 
                        icon={faHeart}
                        style={{ color: favStates[2] ? 'red' : 'gray', cursor: 'pointer' }}
                        onClick={() => toggleFav(2)}
                    />
                </div>

                {/* DESTINO 4 */}
                <div className="destino">
                    <img src={nazcaCosta} alt="Nazca" />
                    <h3>Nazca</h3>
                    <p>
                        Hogar de las enigmáticas líneas que desafían el tiempo.
                    </p><br />
                    <Link to="/PaginaNazca">Ir a destino <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <FontAwesomeIcon 
                        icon={faHeart}
                        style={{ color: favStates[3] ? 'red' : 'gray', cursor: 'pointer' }}
                        onClick={() => toggleFav(3)}
                    />
                </div>

                {/* DESTINO 5 */}
                <div className="destino">
                    <img src={mancoraCosta} alt="Mancora" />
                    <h3>Máncora</h3>
                    <p>Relájate en las soleadas playas de Máncora.</p>
                    <br />
                    <Link to="/PaginaMancora">Ir a destino <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <FontAwesomeIcon 
                        icon={faHeart}
                        style={{ color: favStates[4] ? 'red' : 'gray', cursor: 'pointer' }}
                        onClick={() => toggleFav(4)}
                    />
                </div>

                {/* DESTINO 6 */}
                <div className="destino">
                    <img src={tumbezCosta} alt="Tumbes" />
                    <h3>Tumbes</h3>
                    <p>Descansa en las tranquilas playas de Tumbes.</p>
                    <br />
                    <Link to="/PaginaTumbes">Ir a destino <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    <FontAwesomeIcon 
                        icon={faHeart}
                        style={{ color: favStates[5] ? 'red' : 'gray', cursor: 'pointer' }}
                        onClick={() => toggleFav(5)}
                    />
                </div>
            </section>
        </>
    )
}

export default destinoCosta;