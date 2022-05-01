import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>

      <label for="title">Title</label>
      <input type="text" 
              placeholder="title"
              value={title}
              onChange={({ target }) => setTitle(target.value)} 
              />

      <label for="date">Date</label>
      <input type="date" 
            min={getTodayString}
            value={date}
            onChange={({ target }) => setDate(target.value)} 
            />

      <label for="time">Time</label>
      <input type="time" 
              
              value={time}
              onChange={({ target }) => setTime(target.value)} 
              />
      <ContactPicker contacts={contacts}
                     value={contact}
                     onChange={({ target }) => setContact(target.value)} />

      <input type="submit" />

    </form>
  );
};
