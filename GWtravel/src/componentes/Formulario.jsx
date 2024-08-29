import { Fragment, useState } from "react";
import { Form,Row,Col } from 'react-bootstrap';
import './EstiloContacto.css';

const EfectoContacto = () => {
    const [Nombres, setNombres] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Correo, setCorreo] = useState('');
    const [Presupuesto, setPresupuesto] = useState('');
    const [Destino, setDestino] = useState('');
    const [Salida, setSalida] = useState('');
    const [Retorno, setRetorno] = useState('');

    const regexTexto = /^[a-zA-ZÁÉÍÓÚñ\s]+$/;
    const regexEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;

    const realizarEnvio = (e) => {
        e.preventDefault();

        if (Nombres === '' || Telefono === '' || Correo === '' || Presupuesto === '' || Destino === '' || Salida === '' || Retorno === '') {
            alert('Las cajas de texto están vacías');
        } else if (!regexTexto.test(Nombres) || !regexEmail.test(Correo)) {
            alert('Los datos son inválidos');
        } else {
            alert(`Datos ingresados: { Nombres: ${Nombres}, Teléfono: ${Telefono}, Correo: ${Correo}, Presupuesto: ${Presupuesto}, Destino: ${Destino}, Salida: ${Salida}, Retorno: ${Retorno} }`);
        }
    }

    return (
        <div className="content-form">
            <Form onSubmit={realizarEnvio}>
                <Form.Group className="form-group">
                    <Form.Label className="w-b">Nombres y apellidos:</Form.Label>
                    <Form.Control id="name" type="text" placeholder="Nombres y apellidos" required value={Nombres} onChange={(e) => setNombres(e.target.value)} />
                </Form.Group>
            <Row className="par1">
                <Col className="uni">
                    <Form.Group className="form-group">
                        <Form.Label className="w-b">Telefono:</Form.Label>
                        <Form.Control type="text" placeholder="Telefono" required value={Telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col className="uni">
                    <Form.Group className="form-group">
                        <Form.Label className="w-b">Correo</Form.Label>
                        <Form.Control type="text" placeholder="Correo" required value={Correo} onChange={(e) => setCorreo(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="par1">
                <Col className="uni">
                <Form.Group className="form-group">
                    <Form.Label className="w-b">Presupuesto</Form.Label>
                    <Form.Control type="text" placeholder="Presupuesto" required value={Presupuesto} onChange={(e) => setPresupuesto(e.target.value)} />
                </Form.Group>
                </Col>
                <Col className="uni"></Col>
            </Row>
            <Row className="par1">
                <Col className="uni">
                <Form.Group className="form-group">
                    <Form.Label className="w-b">Destino</Form.Label>
                    <Form.Control type="text" placeholder="Destino" required value={Destino} onChange={(e) => setDestino(e.target.value)} />
                </Form.Group>
                </Col>
                <Col className="uni">
                <Form.Group className="form-group">
                    <Form.Label className="w-b">Salida</Form.Label>
                    <Form.Control type="text" placeholder="Salida" required value={Salida} onChange={(e) => setSalida(e.target.value)} />
                </Form.Group>
                </Col>
                <Col className="uni">
                <Form.Group className="form-group">
                    <Form.Label className="w-b">Retorno</Form.Label>
                    <Form.Control type="text" placeholder="Retorno" required value={Retorno} onChange={(e) => setRetorno(e.target.value)} />
                </Form.Group>
                </Col>
            </Row>
            <button className="fBoton" type="submit">Enviar</button>
        </Form>
        </div>
    );
}

export default EfectoContacto;