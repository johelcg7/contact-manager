import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col, Spinner, Alert, Form } from 'react-bootstrap';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import NavigationBar from './pages/Navbar';

import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactGrid from './components/ContactGrid';
import ContactPinned from './components/ContactPinned';
import ContactDetail from './components/ContactDetail';
import ContactForm from './components/ContactForm';

// Importar funciones de servicio
import { fetchContacts, saveContact } from './services/contactService';

function App() {
    const [isListView, setIsListView] = useState(true);
    const [featuredContact, setFeaturedContact] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [newContact, setNewContact] = useState({ fullname: '', phonenumber: '', email: '', type: 'familia' });
    const [searchTerm, setSearchTerm] = useState('');

    

    const toggleView = () => {
        setIsListView(!isListView);
    };

    const loadContacts = async () => {
        setIsLoading(true);
        setErrorMessage(null);
        try {
            const data = await fetchContacts();
            const contactsWithId = data.map((contact, index) => ({
                ...contact,
                id: index + 1, // Genera un ID único si no existe
            }));
            setContacts(contactsWithId);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadContacts();
    }, []);

    const filteredContacts = contacts.filter((contact) =>
        contact.fullname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container fluid>
            <Header />
            <NavigationBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <Button variant="primary" size="sm" onClick={toggleView}>
                                    {isListView ? 'Vista Tarjetas' : 'Vista Lista'}
                                </Button>
                                <Button variant="secondary" size="sm" onClick={loadContacts} disabled={isLoading}>
                                    {isLoading ? <Spinner animation="border" size="sm" /> : 'Refrescar'}
                                </Button>
                            </div>
                            <Form.Control
                                type="text"
                                placeholder="Buscar..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="mb-2"
                                size="sm"
                            />
                            <Row>
                                <Col xs={12} md={8}>
                                    {isListView ? (
                                        <ContactList contacts={filteredContacts} onContactClick={setFeaturedContact} />
                                    ) : (
                                        <ContactGrid contacts={filteredContacts} onContactClick={setFeaturedContact} />
                                    )}
                                </Col>
                                <Col xs={12} md={4}>
                                    {featuredContact ? (
                                        <ContactPinned contact={featuredContact} onClear={() => setFeaturedContact(null)} />
                                    ) : (
                                        <Alert variant="info" className="p-2">Ningún contacto seleccionado</Alert>
                                    )}
                                </Col>
                            </Row>
                        </>
                    }
                />
                <Route
                    path="/create"
                    element={
                        <ContactForm
                            onSave={(newContact) => {
                                setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]); // Añade el nuevo contacto
                            }}
                        />
                    }
                />
                <Route
                    path="/contact/:id"
                    element={<ContactDetail contacts={contacts} />}
                />
            </Routes>
        </Container>
    );
}

export default App;
