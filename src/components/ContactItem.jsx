import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

const ContactItem = ({ contact, onClick, isSelected }) => {
    const getBadgeVariant = (type) => {
        switch(type) {
            case 'familia': return 'primary';
            case 'trabajo': return 'success';
            default: return 'info';
        }
    };

    return (
        <div
            className={`contact-list-item ${isSelected ? 'selected' : ''}`}
            onClick={() => onClick(contact)}
        >
            <div className="contact-info">
                <h3>
                    <Link to={`/contact/${contact.id}`} style={{ textDecoration: 'none' }}>
                        {contact.fullname}
                    </Link>
                </h3>
                <p><i className="bi bi-telephone me-2"></i>{contact.phonenumber}</p>
                <p><i className="bi bi-envelope me-2"></i>{contact.email}</p>
            </div>
            <div className="contact-type">
                <Badge bg={getBadgeVariant(contact.type)}>{contact.type}</Badge>
            </div>
        </div>
    );
};

export default ContactItem;