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

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${contact.phonenumber.replace(/[^0-9]/g, '')}`;
        window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
    };

    return (
        <div className="contact-detail">
            <div className="contact-detail-header">
                <div className="contact-detail-avatar">
                    {contact.fullname[0]}
                </div>
                <div className="contact-detail-title">
                    <h2>{contact.fullname}</h2>
                    <span className="contact-type">{contact.type}</span>
                </div>
            </div>
            <div className="contact-detail-info">
                <div className="contact-detail-field">
                    <label><i className="bi bi-telephone"></i> Teléfono</label>
                    <p>{contact.phonenumber}</p>
                </div>
                <div className="contact-detail-field">
                    <label><i className="bi bi-envelope"></i> Email</label>
                    <p>{contact.email}</p>
                </div>
            </div>
            <div className="contact-detail-actions">
                <Button variant="outline-primary" onClick={() => navigate('/')}>
                    <i className="bi bi-arrow-left"></i> Volver
                </Button>
                <Button variant="success" onClick={handleWhatsAppClick}>
                    <i className="bi bi-whatsapp"></i> WhatsApp
                </Button>
            </div>
        </div>
    );
}

export default ContactDetail;