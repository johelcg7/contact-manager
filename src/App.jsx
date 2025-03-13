import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col, Spinner, Alert, Form } from 'react-bootstrap';

import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactGrid from './components/ContactGrid';
import ContactPinned from './components/ContactPinned';

// Importar funciones de servicio
import { fetchContacts, saveContact } from './services/contactService';

function App() {
    const [isListView, setIsListView] = useState(true);
    const [featuredContact, setFeaturedContact] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [newContact, setNewContact] = useState({ fullname: '', phonenumber: '', email: '', type: 'familia' });

    const toggleView = () => {
        setIsListView(!isListView);
    };

    const handleContactClick = (contact) => {
        setFeaturedContact(contact);
    };

    const clearFeaturedContact = () => {
        setFeaturedContact(null);
    };

    const loadContacts = async () => {
        setIsLoading(true);
        setErrorMessage(null);
        try {
            const data = await fetchContacts();
            setContacts(data);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSaveContact = async (contact) => {
        setIsLoading(true);
        setErrorMessage(null);
        try {
            const newContact = await saveContact(contact);
            setContacts([...contacts, newContact]);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSaveContact(newContact);
        setNewContact({ fullname: '', phonenumber: '', email: '', type: 'familia' });
    };

    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <Container>
            <Header />
            <Button variant="primary" onClick={toggleView}>
                {isListView ? 'Cambiar a Vista de Tarjetas' : 'Cambiar a Vista de Lista'}
            </Button>
            <Button variant="secondary" onClick={loadContacts} disabled={isLoading}>
                {isLoading ? <Spinner animation="border" size="sm" /> : 'Cargar Contactos'}
            </Button>

            {errorMessage && (
                <Alert variant="danger">
                    {errorMessage}
                    <Button variant="link" onClick={loadContacts}>
                        Reintentar
                    </Button>
                </Alert>
            )}

            <h1>Lista de Contactos</h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formFullname">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa el nombre completo"
                        value={newContact.fullname}
                        onChange={(e) => setNewContact({ ...newContact, fullname: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="formPhonenumber">
                    <Form.Label>Número Telefónico</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa el número telefónico"
                        value={newContact.phonenumber}
                        onChange={(e) => setNewContact({ ...newContact, phonenumber: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingresa el email"
                        value={newContact.email}
                        onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="formType">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Control
                        as="select"
                        value={newContact.type}
                        onChange={(e) => setNewContact({ ...newContact, type: e.target.value })}
                    >
                        <option value="familia">Familia</option>
                        <option value="social">Social</option>
                        <option value="trabajo">Trabajo</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={isLoading}>
                    {isLoading ? <Spinner animation="border" size="sm" /> : 'Agregar Contacto'}
                </Button>
            </Form>
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
