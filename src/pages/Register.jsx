import { useState } from "react";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    const today = new Date();
    const dob = new Date(dateOfBirth);
    if (!firstName || !/^[a-zA-Z]+$/.test(firstName)) {
      errors.firstName = "First name is required and should only contain letters.";
    }
    if (!lastName || !/^[a-zA-Z]+$/.test(lastName)) {
      errors.lastName = "Last name is required and should only contain letters.";
    }
    if (!dateOfBirth || dob >= today) {
      errors.dateOfBirth = "Date of birth is required and should be earlier than today.";
    }
    if (!address) {
      errors.address = "Address is required.";
    }
    if (!city) {
      errors.city = "City is required.";
    }
    if (!state) {
      errors.state = "State is required.";
    }
    if (!country) {
      errors.country = "Country is required.";
    }
    if (!zipCode) {
      errors.zipCode = "Zip code is required.";
    }
    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errors.email = "Email is required and should be valid.";
    }
    if (!telephone || !/^\d{3}-\d{3}-\d{4}$/.test(telephone)) {
      errors.telephone = "Telephone number is required and should be in the format XXX-XXX-XXXX.";
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
        dateOfBirth,
        address,
        city,
        state,
        country,
        zipCode,
        email,
        telephone,
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
      case "dateOfBirth":
        setDateOfBirth(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "zipCode":
        setZipCode(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "telephone":
        setTelephone(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Register a new account</h2>
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
          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={dateOfBirth} onChange={handleChange} />
          {errors.dateOfBirth && <div className="error">{errors.dateOfBirth}</div>}
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={address} onChange={handleChange} />
          {errors.address && <div className="error">{errors.address}</div>}
        </div>
        <div className="form-group">
          <label>City:</label>
          <input type="text" name="city" value={city} onChange={handleChange} />
          {errors.city && <div className="error">{errors.city}</div>}
        </div>
        <div className="form-group">
          <label>State:</label>
          <input type="text" name="state" value={state} onChange={handleChange} />
          {errors.state && <div className="error">{errors.state}</div>}
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input type="text" name="country" value={country} onChange={handleChange} />
          {errors.country && <div className="error">{errors.country}</div>}
        </div>
        <div className="form-group">
          <label>Zip Code:</label>
          <input type="text" name="zipCode" value={zipCode} onChange={handleChange} />
          {errors.zipCode && <div className="error">{errors.zipCode}</div>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label>Telephone:</label>
          <input type="tel" name="telephone" value={telephone} onChange={handleChange} />
          {errors.telephone && <div className="error">{errors.telephone}</div>}
        </div>
        <div className="form-group">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm; 