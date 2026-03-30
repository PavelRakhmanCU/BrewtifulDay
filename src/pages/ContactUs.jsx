import { useState } from "react";

const ContactUsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!firstName || !/^[a-zA-Z]+$/.test(firstName)) {
      errors.firstName = "First name is required and should only contain letters.";
    }
    if (!lastName || !/^[a-zA-Z]+$/.test(lastName)) {
      errors.lastName = "Last name is required and should only contain letters.";
    }
    if (!subject) {
      errors.subject = "Subject is required.";
    }
    if (!telephone || !/^\d{3}-\d{3}-\d{4}$/.test(telephone)) {
      errors.telephone = "Telephone number is required and should be in the format XXX-XXX-XXXX.";
    }
    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errors.email = "Email is required and should be valid.";
    }
    if (!message) {
      errors.message = "Message is required.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        firstName,
        lastName,
        subject,
        telephone,
        email,
        message,
      };
      console.log(formData);
    } else {
      alert("Please fill out the form correctly.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "telephone":
        setTelephone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="contact-us-form-container">
      <form className="contact-us-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={firstName} onChange={handleChange} />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={lastName} onChange={handleChange} />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>
        <div className="form-group">
          <label>Subject:</label>
          <input type="text" name="subject" value={subject} onChange={handleChange} />
          {errors.subject && <div className="error">{errors.subject}</div>}
        </div>
        <div className="form-group">
          <label>Telephone:</label>
          <input type="tel" name="telephone" value={telephone} onChange={handleChange} />
          {errors.telephone && <div className="error">{errors.telephone}</div>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" value={message} onChange={handleChange} />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>
        <div className="form-group">
          <input type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm; 