import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Header from './components/Header';
import ContactList from './components/ContactList';
import ContactCardView from './components/ContactCardView';
import ContactDetail from './components/ContactDetail';

const contacts = [
  { name: 'Johnny Deep', phone: '123-456-7890' },
  { name: 'Janis Joplin', phone: '987-654-3210' },
  { name: 'Paul Mc Carthney', phone: '987-344-3210' },
  { name: 'Chuck Berry', phone: '987-344-5240' },
];

const featuredContact = { name: 'Alice Johnson', phone: '555-123-4567', email: 'alice@example.com' };

function App() {
  const [isListView, setIsListView] = useState(true);
  const [featuredContact, setFeaturedContact] = useState(null)

  const toggleView = () => {
    setIsListView(!isListView)
  };

  const handleContactClick = (contact) => {
    setFeaturedContact(contact);
  };

  return (
    <>
      <Header />
      <button onClick={toggleView}>
        {isListView ? 'Cambiar a Vista de Tarjetas' : 'Cambiar a Vista de Lista'}

        </button>

      <h1>Lista de Contactos</h1>
      {isListView ? (
      <ContactList contacts={contacts} onContactClick={handleContactClick} />
    ): ( 
    <ContactCardView contacts={contacts} onContactClick={handleContactClick} />
    )}
      <h2>Contacto Destacado</h2>
      {featuredContact && <ContactDetail contact={featuredContact} />}
    </>
  );
}

export default App;
