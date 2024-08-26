import React, { useState } from 'react';
import './EstiloContacto.css';

const Formulario = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const newErrors = {};
        const nameRegex = /^[a-zA-ZÁÉÍÓÚñ\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name || formData.name.length < 3 || !nameRegex.test(formData.name)) {
            newErrors.name = 'Nombre inválido (mínimo 3 caracteres, solo letras y espacios)';
        }
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }
        if (!formData.company || formData.company.length < 2) {
            newErrors.company = 'Compañía/Organización inválida (mínimo 2 caracteres)';
        }
        if (!formData.message) {
            newErrors.message = 'Mensaje es requerido';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            alert('Datos correctos. Formulario enviado exitosamente.');
        } else {
            setErrors(formErrors);
            let errorMessage = 'Por favor corrige los siguientes errores:\n';
            for (const [key, value] of Object.entries(formErrors)) {
                errorMessage += `- ${value}\n`;
            }
            alert(errorMessage);
        }
    };

    const handleFocus = (e) => {
        if (e.target.value === e.target.placeholder) {
            setFormData({
                ...formData,
                [e.target.name]: ''
            });
        }
    };

    return (
        <main>
            <h1 className='tituloC'>Contáctanos</h1>
            <div className="contenedor">
                <div className="fContacto">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nombres y Apellidos*</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            placeholder="Ingrese su nombre completo"
                            required
                        />
                        {errors.name && <p className="error">{errors.name}</p>}

                        <label htmlFor="email">Email*</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            placeholder="Ingrese su correo electrónico"
                            required
                        />
                        {errors.email && <p className="error">{errors.email}</p>}

                        <label htmlFor="company">Compañía/Organización*</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            placeholder="Ingresa tu compañía"
                            required
                        />
                        {errors.company && <p className="error">{errors.company}</p>}

                        <label htmlFor="message">Mensaje*</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            placeholder="Déjanos tu comentario"
                            required
                        />
                        {errors.message && <p className="error">{errors.message}</p>}

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Formulario;