import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, onContactClick, selectedContact }) {
    return (
        <div className="contact-list">
            {contacts.map((contact, index) => (
                <ContactItem
                    key={index}
                    contact={contact}
                    onClick={onContactClick}
                    isSelected={selectedContact?.id === contact.id}
                />
            ))}
        </div>
    );
}

export default ContactList;