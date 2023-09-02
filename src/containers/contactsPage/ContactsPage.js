import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


//primeste props de la  parent App
// are children ContactForm + TileList
//props pt TileList : contacts, care l-a primit de la parent
//props pt ContactForm : name, setName...handleSubmit (foloseste addContact de la parent)
export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 // astea le vom introduce in formular, de aici din parent controla state of form
 // astea puteau fi declarate in ContactForms, dar folosim separate of concerns
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   // aici verifcam daca deja in contacts este noul contact ce vrem sa-l adaugam, 
   //nu in functia addContact. aceea e pt a face update la state contacts
  
    if (!duplicate){
      addContact(name, phone, email);
      // clear data after submision
      setName("");
      setPhone("");
      setEmail("");
        
      }  
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact
          {duplicate ? " :  Name already exists!" : ""}</h2> 
        <ContactForm 
            name= {name} 
            setName={setName} 
            phone={phone} 
            setPhone={setPhone} 
            email={email} 
            setEmail={setEmail} 
            handleSubmit={handleSubmit} 
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList datasInputs={contacts}/>
      </section>
    </div>
  );
};
