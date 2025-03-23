import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactCard = ({ contact, onClick }) => {
    return (
        <Card 
            className="contact-card mb-3" 
            onClick={() => onClick(contact)}
            style={{ cursor: 'pointer' }}
        >
            <Card.Body>
                <Card.Title className="d-flex align-items-center">
                    <div className="avatar me-2">
                        {contact.fullname.charAt(0).toUpperCase()}
                    </div>
                    <Link 
                        to={`/contact/${contact.id}`} 
                        style={{ textDecoration: 'none', color: '#1a237e', fontWeight: 'bold' }}
                        onClick={(e) => e.stopPropagation()} // Evita que el evento de clic se propague al contenedor
                    >
                        {contact.fullname}
                    </Link>
                </Card.Title>
                <Card.Text>
                    <div className="contact-info">
                        <span className="mb-1 d-block">
                            <i className="bi bi-telephone me-2"></i>
                            {contact.phonenumber}
                        </span>
                        <span className="mb-1 d-block">
                            <i className="bi bi-envelope me-2"></i>
                            {contact.email}
                        </span>
                        <span className={`badge bg-${contact.type === 'familia' ? 'primary' : contact.type === 'trabajo' ? 'success' : 'info'}`}>
                            {contact.type}
                        </span>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ContactCard;