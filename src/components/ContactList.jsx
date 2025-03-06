import React from 'react';

import ContactItem from './ContactItem';

function ContactList({ contacts, onContactClick }) {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} onClick={onContactClick}/>
      ))}
    </div>
  );
}

export default ContactList;