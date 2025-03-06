import React from 'react';
import { Card } from 'react-bootstrap';

const ContactCard = ({ contact, onClick }) => {
    return (
        <Card className="contact-card" onClick={() => onClick(contact)}>
            <Card.Body>
                <Card.Title>{contact.fullname}</Card.Title>
                <Card.Text>
                    <p>Phone: {contact.phonenumber}</p>
                    <p>Email: {contact.email}</p>
                    <p>Type: {contact.type}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ContactCard;