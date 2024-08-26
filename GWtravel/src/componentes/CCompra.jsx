import { Fragment } from "react";
import React, {useState} from "react";
import './Costa.css'

function compra({ recomendacion1, recomendacion2, recomendacion3, recomendacion4, recomendacion5,
        actividad1, actividad2, actividad3, actividad4, actividad5, actividad6, actividad7, actividad8 }) {
    const [numBox, setNumBox] = useState(2); // Número de actividades
    const [num1, setNum1] = useState(2); // Número de días
    const [num2, setNum2] = useState(1); // Número de noches
    const [fecha, setFecha] = useState('');
    const [valorSeleccionado, setValorSeleccionado] = useState('');
    const [checkboxes, setCheckboxes] = useState([]);
    const [precio] = useState(145); // Precio fijo

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setCheckboxes(prevCheckboxes => {
            if (checked) {
                return [...prevCheckboxes, value];
            } else {
                return prevCheckboxes.filter(checkbox => checkbox !== value);
            }
        });
    };

    const handleSelectChange = (event) => {
        setValorSeleccionado(event.target.value);
    };

    const aumentar = () => {
        setNum1(prevNum1 => {
            const newNum1 = prevNum1 + 1;
            const newNum2 = num2 + 1;
            const newNumBox = numBox + 1;
            
            if (newNum1 >= 9) {
                alert("Solo hay vacaciones de 8 días como máximo.");
                return 8;
            }

            setNum2(newNum2);
            setNumBox(newNumBox);
            return newNum1;
        });
    };

    const disminuir = () => {
        setNum1(prevNum1 => {
            const newNum1 = prevNum1 - 1;
            const newNum2 = num2 - 1;
            const newNumBox = numBox - 1;

            if (newNum1 <= 1) {
                alert("No hay vacaciones de un día.");
                return 2;
            }

            setNum2(newNum2);
            setNumBox(newNumBox);
            return newNum1;
        });
    };

    const imprimirTexto = () => {
        const contador = checkboxes.length;

        if (contador > num1) {
            alert('No puede seleccionar más de ' + num1 + ' opciones.');
            return;
        }

        if (contador === 0) {
            alert('Debe seleccionar al menos 1 opción.');
            return;
        }

        if (!valorSeleccionado) {
            alert('Debes incluir un beneficio.');
            return;
        }

        const total = precio * contador;
        const mensaje = checkboxes.join('<br>');

        document.getElementById('imprimir-texto').innerHTML =
            `Sus vacaciones comienzan en ${fecha} de ${num1} días.<br><br>` +
            `Las actividades que seleccionó son ${contador}:<br><br>${mensaje}<br>` +
            `Una actividad se realizará en un día completo.<br><br> Incluye ${valorSeleccionado}` +
            `<br><br>Y el precio en total es: S/ ${total}`;
    };
    return (
        <>
            <div className="right">
                <div className="formulario-compra">
                    <div className="fdias">
                    <label htmlFor="num1">Día: </label>
                    <input type="number" id="num1" value={num1} readOnly />
                    <label htmlFor="num2">Noche: </label>
                    <input type="number" id="num2" value={num2} readOnly /><br /><br />
                    </div>
                    <div className="fbotones">
                        <button className="max-min" type="button" onClick={aumentar}>+</button>
                        <button className="max-min" type="button" onClick={disminuir}>-</button>
                    </div>
                </div>

                <label htmlFor="fecha">Escoger fecha</label>
                <input type="date" id="fecha" name="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />

                <div className="dropdown">
                    <div className="actividadesNumero">
                        <h4>Escoge los lugares que quieres visitar: <input className="boxNumber" id="numBox" value={numBox} readOnly /> actividades</h4>
                    </div>

                    <div className="dropdown-content">
                        <input type="checkbox" name="optionLugar" value="Visitar el Centro Histórico" onChange={handleCheckboxChange} /> {actividad1}<br />
                        <input type="checkbox" name="optionLugar" value="Disfrutar de la Gastronomía" onChange={handleCheckboxChange} /> {actividad2}<br />
                        <input type="checkbox" name="optionLugar" value="Pasear por el Malecón de Miraflores" onChange={handleCheckboxChange} /> {actividad3}<br />
                        <input type="checkbox" name="optionLugar" value="Explorar Barranco" onChange={handleCheckboxChange} />{actividad4}<br />
                        <input type="checkbox" name="optionLugar" value="Visitar el Museo Larco" onChange={handleCheckboxChange} /> {actividad5}<br />
                        <input type="checkbox" name="optionLugar" value="Navegar por el Circuito Mágico del Agua" onChange={handleCheckboxChange} /> {actividad6}<br />
                        <input type="checkbox" name="optionLugar" value="Recorrer las Ruinas de Huaca Pucllana" onChange={handleCheckboxChange} /> {actividad7}<br />
                        <input type="checkbox" name="optionLugar" value="Degustar en una Ruta del Pisco Sour" onChange={handleCheckboxChange} /> {actividad8}<br />
                    </div>
                </div>

                <div className="recomendaciones">
                    <h4>Recomendaciones</h4>
                    <ul>
                        <li>{recomendacion1}</li>
                        <li>{recomendacion2}</li>
                        <li>{recomendacion3}</li>
                        <li>{recomendacion4}</li>
                        <li>{recomendacion5}</li>
                    </ul>
                </div>

                <label htmlFor="incluye">Incluye</label>
                <select id="incluye" name="incluye" value={valorSeleccionado} onChange={handleSelectChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="Alojamiento">Alojamiento</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Visitas guiadas y excursiones">Visitas guiadas y excursiones</option>
                    <option value="Comidas">Comidas</option>
                    <option value="Entradas a atracciones">Entradas a atracciones</option>
                    <option value="Seguro de viaje">Seguro de viaje</option>
                    <option value="Actividades especiales">Actividades especiales</option>
                    <option value="Actividades opcionales">Actividades opcionales</option>
                </select>

                <button className="toggle-button" onClick={imprimirTexto}>Mostrar Resultados</button>
                <button className="reserve-button" >Reservar Paquete</button>
            </div>
        </>
    )
}

export default compra;