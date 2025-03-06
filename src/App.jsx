import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col } from 'react-bootstrap';

import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactGrid from './components/ContactGrid';
import ContactPinned from './components/ContactPinned';
import contacts from './data/contacts.json';

function App() {
    const [isListView, setIsListView] = useState(true);
    const [featuredContact, setFeaturedContact] = useState(null);

    const toggleView = () => {
        setIsListView(!isListView);
    };

    const handleContactClick = (contact) => {
        setFeaturedContact(contact);
    };

    const clearFeaturedContact = () => {
        setFeaturedContact(null);
    };

    return (
        <Container>
            <Header />
            <Button variant="primary" onClick={toggleView}>
                {isListView ? 'Cambiar a Vista de Tarjetas' : 'Cambiar a Vista de Lista'}
            </Button>

            <h1>Lista de Contactos</h1>
            <Row>
                <Col>
                    {isListView ? (
                        <ContactList contacts={contacts} onContactClick={handleContactClick} />
                    ) : (
                        <ContactGrid contacts={contacts} onContactClick={handleContactClick} />
                    )}
                </Col>
                <Col>
                    {featuredContact ? (
                        <ContactPinned contact={featuredContact} onClear={clearFeaturedContact} />
                    ) : (
                        <p>Ningún contacto seleccionado</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default App;
