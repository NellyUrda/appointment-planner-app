import React from "react";

// primeste props de la parent ContactsPage
// toata logica de la useState() pt a controla inputs  o implementam in parent
// la fel si cand apasam butonul
export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  function handleChangeName (e){
    setName(e.target.value);
  }
  
  function handleChangePhone (e){
    setPhone(e.target.value);
  }

  function handleChangeEmail (e){
    setEmail(e.target.value);
  }

  return (
    <>
      <form onSubmit ={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id= "name"
          name= "name"
          value={name}
          onChange={handleChangeName}
          required
        />
        <label htmlFor="phone">Phone Number:</label>
        <input 
          type="tel" 
          id= "phone"
          name= "phone"
          value={phone}
          onChange={handleChangePhone}
          required
        />
        <label htmlFor="email">E-mail:</label>
        <input 
          type="email" 
          id= "email"
          name= "email"
          value={email}
          onChange={handleChangeEmail}
          required
        />
        <input type="submit" value="Add contact"/>
      </form>
    </>
  )};

