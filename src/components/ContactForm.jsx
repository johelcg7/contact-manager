import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = ({ onSave }) => {
    const [newContact, setNewContact] = useState({
        fullname: '',
        phonenumber: '',
        email: '',
        type: 'familia',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewContact({ ...newContact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(newContact); // Llama a la función para guardar el contacto
        setNewContact({ fullname: '', phonenumber: '', email: '', type: 'familia' }); // Limpia el formulario
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFullname">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                    type="text"
                    name="fullname"
                    placeholder="Ingresa el nombre completo"
                    value={newContact.fullname}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formPhonenumber">
                <Form.Label>Número Telefónico</Form.Label>
                <Form.Control
                    type="text"
                    name="phonenumber"
                    placeholder="Ingresa el número telefónico"
                    value={newContact.phonenumber}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Ingresa el email"
                    value={newContact.email}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="formType">
                <Form.Label>Tipo</Form.Label>
                <Form.Control
                    as="select"
                    name="type"
                    value={newContact.type}
                    onChange={handleChange}
                >
                    <option value="familia">Familia</option>
                    <option value="social">Social</option>
                    <option value="trabajo">Trabajo</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Guardar
            </Button>
        </Form>
    );
};

export default ContactForm;