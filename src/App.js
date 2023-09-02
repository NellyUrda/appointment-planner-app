import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

// app e parent pt ContactsPage si AppointmentPage
function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 // contacts si appointments este un array of objects
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
 
  const addContact = (name, phoneNumber,email)=>{
    let contact = {};
    contact.name= name;
    contact.phoneNumber = phoneNumber;
    contact.email = email;

    setContacts((prev)=>{
        return [contact, ...prev];
      });
  }

  const addAppointment = (name, contact, date, time)=>{
    let appointment = {};
    appointment.name = name;
    appointment.contact = contact;
    appointment.date = date;
    appointment.time = time;
    setAppointments((prev)=>{
      return [appointment, ...prev];
    })

  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS}
             element={ <ContactsPage 
                          contacts={contacts} 
                          addContact={addContact}
                        /> /* Add props to ContactsPage */ }
      />
      <Route path={ROUTES.APPOINTMENTS} 
             element={ <AppointmentsPage 
                          appointments={appointments} 
                          addAppointment={addAppointment} 
                          contacts={contacts}
                        /> /* Add props to AppointmentsPage */}
      />
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
