import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";


/*
const getContactNames = () => {
  return contacts.map((contact) => contact.name);
};
*/

// child la AppointmentPage
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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label> 
        <input 
          id="title"
          name="title"
          type ="text"
          value ={title}
          required
          onChange={(e)=>setTitle(e.target.value)}
        />
        <label htmlFor="date">Date:</label>
        <input
         id="date"
         name="date"
         type="date"
         value={date}
         min={getTodayString()}
         required
         onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="time">Time:</label>
        <input
         id="time"
         name="time"
         type="time"
         value={time}
         required
         onChange={(e) => setTime(e.target.value)}
        />
        <label htmlFor="contact">Choose a contact:</label>
        <ContactPicker 
          name="contact"
          contacts={contacts} 
          value={contact} 
          onChange={(e)=>setContact(e.target.value)}
        />
        <input type="submit" value="Add appointment"/>
      </form>
    </>
  );
};
