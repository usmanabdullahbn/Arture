import React, { useState } from 'react';
import "./Contact.css"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const sendMsgHandler = () => {
  alert("Sorry! Form is not working. Please take a cup of tea send email to me or whatapp me!")
  setFormData({
    name: '',
    email: '',
    message: '',
  })
}

  return (
   <div className='contact-container'>
     <form className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit" className='button-contact' onClick={sendMsgHandler}>Send</button>
    </form>
   </div>
  );
};

export default Contact;
