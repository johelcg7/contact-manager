const API_URL = "https://entermocks.vercel.app/api/contacts";

// src/services/contactService.js
export const fetchContacts = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error('Error al obtener contactos de la API');
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
            throw new Error('La respuesta de la API no es un array');
        }
        return data;
    } catch (error) {
        console.error('Error en fetchContacts:', error.message);
        throw error;
    }
};

export const saveContact = async (contact) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });
        if (!response.ok) {
            throw new Error('Ocurrió un error al guardar el contacto');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

// Puedes agregar más funciones de CRUD aquí (updateContact, deleteContact, etc.)