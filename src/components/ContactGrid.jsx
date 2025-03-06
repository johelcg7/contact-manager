import React from 'react';
import ContactCard from './ContactCard';

const ContactGrid = ({ contacts, onContactClick }) => {
    return (
        <div className="contact-grid">
            {contacts.map((contact, index) => (
                <ContactCard key={index} contact={contact} onClick={onContactClick} />
            ))}
        </div>
    );
};

export default ContactGrid;