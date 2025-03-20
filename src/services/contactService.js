const API_URL = "https://entermocks.vercel.app/api/contacts";

// src/services/contactService.js
export const fetchContacts = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error('Ocurrió un error al cargar contactos');
        }
        return await response.json();
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Error de red: No se pudo conectar con la API');
            throw new Error('Error de red: No se pudo conectar con la API');
        }
        console.error(error.message);
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