import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function ContactDetail({ contacts }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const contact = contacts.find((contact) => contact.id === parseInt(id));

    if (!contact) {
        return <p>Contacto no encontrado.</p>;
    }

    return (
        <div className="contact-detail">
            <h2>{contact.fullname}</h2>
            <p><strong>Teléfono:</strong> {contact.phonenumber}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Tipo:</strong> {contact.type}</p>
            <Button variant="primary" onClick={() => navigate('/')}>
                Volver a la Lista
            </Button>
        </div>
    );
}

export default ContactDetail;