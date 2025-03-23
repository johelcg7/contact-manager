import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col, Spinner, Alert, Form } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './pages/Navbar';

import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactGrid from './components/ContactGrid';
import ContactPinned from './components/ContactPinned';
import ContactDetail from './components/ContactDetail';
import ContactForm from './components/ContactForm';

import { fetchContacts } from './services/contactService';

function App() {
    const [isListView, setIsListView] = useState(true);
    const [featuredContact, setFeaturedContact] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleView = () => {
        const newView = !isListView;
        setIsListView(newView);
        localStorage.setItem('isListView', JSON.stringify(newView)); // Guarda la preferencia
    };

    const loadContacts = async () => {
        setIsLoading(true);
        setErrorMessage(null);
        try {
            const data = await fetchContacts();
            const contactsWithId = data.map((contact, index) => ({
                ...contact,
                id: index + 1,
            }));
            setContacts(contactsWithId);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const saveContactsToLocalStorage = () => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
        alert('Contactos guardados en LocalStorage.');
    };

    const loadContactsFromLocalStorage = () => {
        const storedContacts = localStorage.getItem('contacts');
        if (storedContacts) {
            setContacts(JSON.parse(storedContacts));
            alert('Contactos cargados desde LocalStorage.');
        } else {
            alert('No hay contactos guardados en LocalStorage.');
        }
    };

    const syncContacts = async () => {
        setIsLoading(true);
        setErrorMessage(null);
        try {
            const data = await fetchContacts();
            const contactsWithId = data.map((contact, index) => ({
                ...contact,
                id: index + 1,
            }));
            setContacts(contactsWithId);
            try {
                localStorage.setItem('contacts', JSON.stringify(contactsWithId));
                alert('Sincronización exitosa: Datos actualizados desde la API y guardados en LocalStorage.');
            } catch (storageError) {
                console.error('Error al guardar en localStorage:', storageError.message);
                alert('Error al guardar datos en localStorage.');
            }
        } catch (error) {
            setErrorMessage('Error al sincronizar datos: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const clearContactsFromLocalStorage = () => {
        localStorage.removeItem('contacts');
        setContacts([]); // Limpia el estado de contactos
        alert('Todos los contactos han sido eliminados de LocalStorage.');
    };

    const setFeaturedContactWithPersistence = (contact) => {
        setFeaturedContact(contact);
        localStorage.setItem('featuredContact', JSON.stringify(contact)); // Guarda el contacto destacado
    };

    useEffect(() => {
        try {
            const storedContacts = localStorage.getItem('contacts');
            const storedView = localStorage.getItem('isListView');
            const storedFeaturedContact = localStorage.getItem('featuredContact');

            if (storedContacts) {
                const parsedContacts = JSON.parse(storedContacts);
                if (Array.isArray(parsedContacts)) {
                    setContacts(parsedContacts);
                } else {
                    console.error('Datos corruptos en localStorage. Cargando desde la API...');
                    loadContacts();
                }
            } else {
                loadContacts();
            }

            if (storedView !== null) {
                setIsListView(JSON.parse(storedView)); // Recupera la preferencia de vista
            }

            if (storedFeaturedContact) {
                setFeaturedContact(JSON.parse(storedFeaturedContact)); // Recupera el contacto destacado
            }
        } catch (error) {
            console.error('Error al cargar datos desde localStorage:', error);
            loadContacts();
        }
    }, []);

    const filteredContacts = contacts.filter((contact) =>
        contact.fullname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header />
            <div className="main-content">
                <Container fluid>
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
                                        <Button variant="success" size="sm" onClick={saveContactsToLocalStorage}>
                                            Guardar Contacto en LS
                                        </Button>
                                        <Button variant="info" size="sm" onClick={loadContactsFromLocalStorage}>
                                            Cargar Contactos desde LS
                                        </Button>
                                        <Button variant="warning" size="sm" onClick={syncContacts} disabled={isLoading}>
                                            {isLoading ? <Spinner animation="border" size="sm" /> : 'Sincronizar Datos'}
                                        </Button>
                                        <Button variant="danger" size="sm" onClick={clearContactsFromLocalStorage}>
                                            Eliminar Todo
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
                                                <ContactList
                                                    contacts={filteredContacts}
                                                    onContactClick={setFeaturedContactWithPersistence}
                                                    selectedContact={featuredContact}
                                                />
                                            ) : (
                                                <ContactGrid
                                                    contacts={filteredContacts}
                                                    onContactClick={setFeaturedContactWithPersistence}
                                                />
                                            )}
                                        </Col>
                                        <Col xs={12} md={4}>
                                            {featuredContact ? (
                                                <ContactPinned
                                                    contact={featuredContact}
                                                    onClear={() => {
                                                        setFeaturedContact(null);
                                                        localStorage.removeItem('featuredContact');
                                                    }}
                                                />
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
                                        setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
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
            </div>
        </>
    );
}

export default App;
