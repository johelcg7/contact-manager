const API_URL_SERV = "https://enter-mockapi.vercel.app/api/contacts"

export const fetchContacts = async () => {
    try {
        const response = await fetch(`${API_URL_SERV}`);
        if (!response.ok) {
            throw new Error('Ocurrió un error al cargar contactos');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const saveContact = async (contact) => {
    try {
        const response = await fetch(`${API_URL_SERV}`, {
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