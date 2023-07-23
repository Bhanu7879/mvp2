// ContactForm.js
import React, { useState } from 'react';
import './Form.css';
import emailjs from 'emailjs-com';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // mobile: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  

    // Send the form data using EmailJS service
    emailjs
      .sendForm('service_i41fi05', 'template_agpbd2h', e.target, 'Y0nWAwEDMz2aTMTeg')
   //   'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID',----  service_i41fi05  template_agpbd2h
     

      .then(
        (result) => {
          console.log(result.text);
          window.alert('Form submitted successfully! We will get back to you shortly.');

          // Optionally, show a success message or clear the form after successful submission.
          setFormData({
            name: '',
            email: '',
            // mobile:'',
            details: '',
          });
        },
        (error) => {
          console.log(error.text);
          window.alert('Form submission failed. Please try again later.');

          // Optionally, show an error message to the user in case of submission failure.
        }
      );
  };

  return (
    <div>
         <h1 className="responsive-heading" style={{color:"white"}}>
        {/* Add your heading here */}
        Contact Us 
      </h1>
        
      <form onSubmit={handleSubmit}>
      <h5 style={{ color: "white", textAlign: "left", marginBottom: "5px" }}>Name</h5>
        <input
          type="text"
          name="name"
          required
          placeholder="enter your full name"
          value={formData.name}
          onChange={handleChange}
        />
        <h5 style={{ color: "white", textAlign: "left", marginBottom: "5px" }}>Email</h5>
        <input
          type="email"
          name="email"
          required
          placeholder="enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {/* <h5 style={{ color: "white", textAlign: "left", marginBottom: "5px" }}>Mobile</h5>
         <input
          type="number"
          name="mobile"
          placeholder="enter your mobile number"
          value={formData.mobile}
          onChange={handleChange}
          required
        /> */}
                <h5 style={{ color: "white", textAlign: "left", marginBottom: "5px" }}>Details</h5>

        <textarea
          name="details"
          placeholder="enter your details"
          value={formData.details}
          onChange={handleChange}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Form;
