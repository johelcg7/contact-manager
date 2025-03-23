import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Alert, Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ScheduleMeeting.css';

const ScheduleMeeting = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [meetingDetails, setMeetingDetails] = useState({
        date: new Date(),
        time: '',
        description: '',
    });
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleChange = (field, value) => {
        setMeetingDetails({ ...meetingDetails, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const meetings = JSON.parse(localStorage.getItem('meetings')) || {};
        meetings[id] = meetingDetails;
        localStorage.setItem('meetings', JSON.stringify(meetings));
        setShowConfirmation(true);
        setTimeout(() => {
            setShowConfirmation(false);
            navigate(`/contact/${id}`);
        }, 2000);
    };

    return (
        <Container>
            <div className="schedule-meeting">
                <h2>
                    <i className="bi bi-calendar-check me-2"></i>
                    Agendar Reunión
                </h2>
                {showConfirmation && (
                    <Alert variant="success">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        ¡Reunión guardada exitosamente!
                    </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formDate">
                        <Form.Label>
                            <i className="bi bi-calendar-date me-2"></i>
                            Fecha de la Reunión
                        </Form.Label>
                        <DatePicker
                            selected={meetingDetails.date}
                            onChange={(date) => handleChange('date', date)}
                            dateFormat="dd/MM/yyyy"
                            className="form-control"
                            placeholderText="Selecciona una fecha"
                            minDate={new Date()}
                            showYearDropdown
                            scrollableYearDropdown
                        />
                    </Form.Group>

                    <Form.Group controlId="formTime">
                        <Form.Label>
                            <i className="bi bi-clock me-2"></i>
                            Hora de la Reunión
                        </Form.Label>
                        <Form.Control
                            type="time"
                            value={meetingDetails.time}
                            onChange={(e) => handleChange('time', e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formDescription">
                        <Form.Label>
                            <i className="bi bi-card-text me-2"></i>
                            Detalles de la Reunión
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            value={meetingDetails.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                            placeholder="Describe el propósito y temas a tratar en la reunión"
                            required
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-between mt-4">
                        <Button type="submit" className="btn-primary">
                            <i className="bi bi-save me-2"></i>
                            Guardar Reunión
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => navigate(`/contact/${id}`)}
                        >
                            <i className="bi bi-arrow-left me-2"></i>
                            Regresar
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default ScheduleMeeting;