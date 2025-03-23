import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './ContactDetail.css'; // Importa los estilos

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
            <span>
                <i className="bi bi-telephone"></i> {/* Icono de teléfono */}
                <strong>Teléfono:</strong> {contact.phonenumber}
            </span>
            <span>
                <i className="bi bi-envelope"></i> {/* Icono de correo */}
                <strong>Email:</strong> {contact.email}
            </span>
            <span>
                <i className="bi bi-person-badge"></i> {/* Icono de tipo */}
                <strong>Tipo:</strong> {contact.type}
            </span>
            <Button variant="primary" onClick={() => navigate('/')}>
                Volver a la Lista
            </Button>
        </div>
    );
}

export default ContactDetail;