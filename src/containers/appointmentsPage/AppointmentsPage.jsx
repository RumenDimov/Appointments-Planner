import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {

  const contacts = props.contacts;
  const appointments = props.appointments;
  const addAppointments = props.addAppointments;
  
 const { title, setTitle } = useState('');
 const { contact, setContact } = useState('');
 const { date, setDate } = useState('');
 const { time, setTime } = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addAppointments(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={title}
                         setTitle={setTitle} 
                         contact={contact}
                         setContact={setContact} 
                         date={date}
                         setDate={setDate}
                         time={time}
                         setTime={setTime}
                         contacts={contacts}
                         handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objectArr={appointments} />
      </section>
    </div>
  );
};
