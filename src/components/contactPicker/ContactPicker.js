import React from "react";

// child pt AppointmentForm
export const ContactPicker = ({contacts, onChange, value, name}) => {
  return (
    <>
      <select onChange={onChange} value={value} name={name} >
        <option value={""}>
          No Contact Selected
        </option>
        {contacts.map((contact)=>(
          <option value={contact.name} key={contact}>
            {contact.name}
          </option>
        ))}
      </select>
    </>
  );
};
