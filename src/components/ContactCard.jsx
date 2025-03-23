import React from 'react';
import { Card } from 'react-bootstrap';

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
                    {contact.fullname}
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