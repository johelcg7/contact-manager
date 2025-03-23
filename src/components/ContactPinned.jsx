import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ContactPinned.css'; // Importa los estilos

const ContactPinned = ({ contact, onClear }) => {
    return (
        <Card className="contact-pinned">
            <Card.Body>
                <Card.Title>Contacto Destacado</Card.Title>
                <Card.Text>
                    <h3>{contact.fullname}</h3>
                    <span><strong>Teléfono:</strong> {contact.phonenumber}</span>
                    <span><strong>E-mail:</strong> {contact.email}</span>
                    <span><strong>Tipo:</strong> {contact.type}</span>
                </Card.Text>
                <Button variant="danger" onClick={onClear}>Limpiar</Button>
            </Card.Body>
        </Card>
    );
};

export default ContactPinned;