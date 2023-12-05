import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { SubHeading, MenuItem } from '../../components';
import 'react-datepicker/dist/react-datepicker.css';
import './ReservationForm.css';

const ReservationForm = () => {
  const [reservation, setReservation] = useState({
    name: '',
    email: '',
    date: new Date(),
    time: null,
    guests: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeOptions = [
    { value: '12:00', label: '12:00 PM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '20:00', label: '8:00 PM' },
    { value: '21:00', label: '9:00 PM' },
    { value: '22:00', label: '10:00 PM' },
  ];

  const guestOptions = [
    { value: 1, label: '1 guest' },
    { value: 2, label: '2 guests' },
    { value: 3, label: '3 guest' },
    { value: 4, label: '4 guests' },
    { value: 5, label: '5 guest' },
    { value: 6, label: '6 guests' },
    { value: 7, label: '7 guest' },
    { value: 8, label: '8 guests' },
  ];

  const handleInputChange = (name, value) => {
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedReservation = {
      name: reservation.name,
      email: reservation.email,
      date: reservation.date.toISOString(),
      time: reservation.time.value,
      guests: reservation.guests.value,
    };
    try {
      await axios.post('http://localhost:5000/api/reservations', formattedReservation);
      setIsSubmitted(true);
    } catch (error) {
      console.error('There was an error making the reservation:', error);
      // Si l'erreur provient d'une réponse axios, imprimez la réponse du serveur
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
      alert('Error making reservation. Please try again later.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="thank-you-message reservation-form-container">
        <h2>Vielen Dank für Ihre Reservierung!</h2>
        <p>Wir haben Ihre Reservierung zu unserem Kalender hinzugefügt.</p>
      </div>
    );
  }

  return (
    <div id="book" className="reservation-form-container">
      <div className="app__specialMenu flex__center" id="menu">
        <div className="app__specialMenu-title">
          <SubHeading title="Menü nach Ihrem Geschmack" />
          <h1 className="headtext__cormorant">Tisch reservieren</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="reservation-form">
        <input
          className="reservation-input"
          type="text"
          name="name"
          placeholder="Full Name"
          value={reservation.name}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          required
        />
        <input
          className="reservation-input"
          type="email"
          name="email"
          placeholder="Email"
          value={reservation.email}
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          required
        />
        <DatePicker
          className="reservation-calendarpicker"
          selected={reservation.date}
          onChange={(date) => handleInputChange('date', date)}
          minDate={new Date()}
          dateFormat="MMMM d, yyyy"
          placeholderText="Select a date"
          wrapperClassName="date-picker-wrapper"
        />
        <Select
          className="reservation-datepicker"
          options={timeOptions}
          onChange={(option) => handleInputChange('time', option)}
          placeholder="Select a time"
          isSearchable={false}
        />
        <Select
          className="reservation-select"
          options={guestOptions}
          onChange={(option) => handleInputChange('guests', option)}
          placeholder="Number of guests"
          isSearchable={false}
        />
        <button type="submit" className="reservation-button">Reservieren</button>
      </form>
    </div>
  );
};
export default ReservationForm;
