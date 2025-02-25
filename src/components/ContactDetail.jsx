import React from 'react';

function ContactDetail({ contact }) {
  return (
    <div className="contact-detail">
      <h2>{contact.name}</h2>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
}

export default ContactDetail;