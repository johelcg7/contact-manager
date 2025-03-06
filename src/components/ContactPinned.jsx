import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ContactPinned = ({ contact, onClear }) => {
    return (
        <Card className="contact-pinned">
            <Card.Body>
                <Card.Title>Contacto Destacado</Card.Title>
                <Card.Text>
                    <h3>{contact.fullname}</h3>
                    <p>Phone: {contact.phonenumber}</p>
                    <p>Email: {contact.email}</p>
                    <p>Type: {contact.type}</p>
                </Card.Text>
                <Button variant="danger" onClick={onClear}>Limpiar</Button>
            </Card.Body>
        </Card>
    );
};

export default ContactPinned;