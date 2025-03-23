import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ContactPinned.css';

const ContactPinned = ({ contact, onClear }) => {
    const meetings = JSON.parse(localStorage.getItem('meetings')) || {};
    const meeting = meetings[contact.id];

    return (
        <Card className="contact-pinned">
            <Card.Body>
                <Card.Title>Contacto Destacado</Card.Title>
                <Card.Text>
                    <h3>{contact.fullname}</h3>
                    <span><strong>Teléfono:</strong> {contact.phonenumber}</span>
                    <span><strong>E-mail:</strong> {contact.email}</span>
                    <span><strong>Tipo:</strong> {contact.type}</span>
                    {meeting && (
                        <div>
                            <hr />
                            <h5>Próxima Reunión</h5>
                            <p>
                                Fecha: {new Date(meeting.date).toLocaleDateString()} <br />
                                Hora: {meeting.time} <br />
                                Detalles: {meeting.description}
                            </p>
                        </div>
                    )}
                </Card.Text>
                <Button variant="danger" onClick={onClear}>Limpiar</Button>
            </Card.Body>
        </Card>
    );
};

export default ContactPinned;