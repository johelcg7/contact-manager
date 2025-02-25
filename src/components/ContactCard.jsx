import React from 'react';

function ContactCard({ contact }) {
  return (
    <div className="contact-card" onClick={() => onClick(contact)} >
      <h2>{contact.name}</h2>
      <p>{contact.phone}</p>
    </div>
  );
}

export default ContactCard;