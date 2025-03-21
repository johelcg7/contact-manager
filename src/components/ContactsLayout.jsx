import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function ContactsLayout() {
    return (
        <div>
            <h2>Contactos por Tipo</h2>
            <nav>
                <ul>
                    <li><Link to="social">Social</Link></li>
                    <li><Link to="familia">Familia</Link></li>
                    <li><Link to="trabajo">Trabajo</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default ContactsLayout;