import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


// parent App
// children ContactForm + TileList
export const ContactsPage = ({contacts, addContact}) => {
  /* state variables for  contact info and duplicate check */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*Add contact info and clear data if the contact name is not a duplicate */
    if (!duplicate){
      addContact(name, phone, email);
      // clear data after submision
      setName("");
      setPhone("");
      setEmail("");
        
      }  
  };

  /* check for contact name in the contacts array variable in props */
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
