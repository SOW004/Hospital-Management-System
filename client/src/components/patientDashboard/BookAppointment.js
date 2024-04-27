import React, { useState } from 'react';


const BookAppointment = () => {
  const [doctorName, setDoctorName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointmentData = {
      doctorName,
      appointmentDate,
      appointmentTime,
      patientName,
      contactNumber,
      email,
    };

    console.log('Appointment booked successfully:', appointmentData);
    // Here you can send the appointmentData to your backend for processing
  };

  return (
    <div className="appointment-form">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="doctor">Select Doctor:</label>
          <select
            id="doctor"
            value={doctorName}
            onChange={(event) => setDoctorName(event.target.value)}
            required
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Lee">Dr. Lee</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Appointment Date:</label>
          <input
            id="date"
            type="date"
            value={appointmentDate}
            onChange={(event) => setAppointmentDate(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Appointment Time:</label>
          <input
            id="time"
            type="time"
            value={appointmentTime}
            onChange={(event) => setAppointmentTime(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="patient">Patient's Name:</label>
          <input
            id="patient"
            type="text"
            value={patientName}
            onChange={(event) => setPatientName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number:</label>
          <input
            id="contact"
            type="tel"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
