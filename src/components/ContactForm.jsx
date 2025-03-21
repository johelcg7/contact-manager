import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const ContactForm = ({ onSave }) => {
    const [newContact, setNewContact] = useState({
        fullname: '',
        phonenumber: '',
        email: '',
        type: 'familia',
    });

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false); // Estado para el mensaje de confirmación

    const validateForm = () => {
        const newErrors = {};
        if (!newContact.fullname.trim()) newErrors.fullname = 'El nombre es requerido.';
        if (!newContact.phonenumber.trim()) newErrors.phonenumber = 'El teléfono es requerido.';
        if (!newContact.email.trim()) {
            newErrors.email = 'El email es requerido.';
        } else if (!/\S+@\S+\.\S+/.test(newContact.email)) {
            newErrors.email = 'El email no es válido.';
        }
        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewContact({ ...newContact, [name]: value });
    };

    const handleBlur = () => {
        validateForm();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
        if (isFormValid) {
            onSave(newContact); // Llama a la función para guardar el contacto
            setNewContact({ fullname: '', phonenumber: '', email: '', type: 'familia' }); // Limpia el formulario
            setErrors({});
            setShowConfirmation(true); // Muestra el mensaje de confirmación
            setTimeout(() => setShowConfirmation(false), 3000); // Oculta el mensaje después de 3 segundos
        }
    };

    return (
        <Container className="contact-form">
            <h2 className="text-center mb-4" style={{ color: '#1a237e' }}>Crear Nuevo Contacto</h2>
            {showConfirmation && (
                <Alert variant="success" onClose={() => setShowConfirmation(false)} dismissible>
                    ¡Contacto guardado exitosamente!
                </Alert>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group" controlId="formFullname">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                        type="text"
                        name="fullname"
                        placeholder="Ingresa el nombre completo"
                        value={newContact.fullname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!errors.fullname}
                        className="form-control-lg"
                    />
                    <Form.Control.Feedback type="invalid">{errors.fullname}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formPhonenumber">
                    <Form.Label>Número Telefónico</Form.Label>
                    <Form.Control
                        type="text"
                        name="phonenumber"
                        placeholder="Ingresa el número telefónico"
                        value={newContact.phonenumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!errors.phonenumber}
                    />
                    <Form.Control.Feedback type="invalid">{errors.phonenumber}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Ingresa el email"
                        value={newContact.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
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
                <div className="text-center mt-4">
                    <Button 
                        variant="primary" 
                        type="submit" 
                        disabled={!isFormValid}
                        className="btn-save"
                        size="lg"
                    >
                        Guardar Contacto
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default ContactForm;