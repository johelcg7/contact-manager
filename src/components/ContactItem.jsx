import React from 'react';

const ContactItem = ({ contact, onClick }) => {
    return (
        <div className="contact-item" onClick={() => onClick(contact)}>
            <h3>{contact.fullname}</h3>
            <p>Phone: {contact.phonenumber}</p>
            <p>Email: {contact.email}</p>
            <p>Type: {contact.type}</p>
        </div>
    );
};

export default ContactItem;