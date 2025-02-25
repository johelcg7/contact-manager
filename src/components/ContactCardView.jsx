import React from 'react';
import ContactCard from './ContactCard';

function ContactCardView({ contacts, onContactClick }) {
  return (
    <div className="contact-card-view">
      {contacts.map((contact, index) => (
        <ContactCard key={index} contact={contact} onClick={onContactClick} />
      ))}
    </div>
  );
}

export default ContactCardView;