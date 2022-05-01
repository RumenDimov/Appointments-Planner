import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name</label>
      <input type="text" 
              placeholder="John Smith"
              value={name}
              onChange={({ target }) => setName(target.value)} 
              />

      <label for="phone">Phone</label>
      <input type="tel" 
            
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}]"
            value={phone}
            onChange={({ target }) => setPhone(target.value)} 
            />

      <label for="email">Email</label>
      <input type="email" 
              placeholder="email@email.com"
              value={email}
              onChange={({ target }) => setEmail(target.value)} 
              />

      <input type="submit" />


    </form>
  );
};
