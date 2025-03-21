import React from 'react';
import { Link } from 'react-router-dom';

const ContactItem = ({ contact, onClick, isSelected }) => {
    return (
        <div
            className={`contact-item ${isSelected ? 'selected' : ''}`}
            onClick={() => onClick(contact)}
        >
            <h3>
                <Link to={`/contact/${contact.id}`}>{contact.fullname}</Link>
            </h3>
            <p>Teléfono: {contact.phonenumber}</p>
            <p>Email: {contact.email}</p>
            <p>Tipo: {contact.type}</p>
        </div>
    );
};

export default ContactItem;