import React from "react";
import "./contactForm.css";

const ContactForm = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formEntries = Object.fromEntries(formData);
    const { name, email, message } = formEntries;
    if (!name) alert("Name cannot be Empty");
    else if (!email) alert("Email cannot be Empty");
    else if (!message) alert("Message cannot be Empty");
    else alert(`Thank you, ${name}, you message has been received`);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="input-field-box">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="input-field-box">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="input-field-box">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
