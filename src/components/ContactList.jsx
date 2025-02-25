import React from 'react';
import ContactCard from './ContactCard';

function ContactList({ contacts, onContactClick }) {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <ContactCard key={index} contact={contact} onClick={onContactClick}/>
      ))}
    </div>
  );
}

export default ContactList;