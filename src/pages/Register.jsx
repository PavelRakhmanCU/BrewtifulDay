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
      <form className="registration-form" onSubmit={handleSubmit} noValidate>
        <h2>Register a new account</h2>
        <div className="form-group">
          <label htmlFor="reg-firstName">First name</label>
          <input
            id="reg-firstName"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            autoComplete="given-name"
          />
          {errors.firstName && (
            <div className="error" role="alert">
              {errors.firstName}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="reg-lastName">Last name</label>
          <input
            id="reg-lastName"
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            autoComplete="family-name"
          />
          {errors.lastName && (
            <div className="error" role="alert">
              {errors.lastName}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="reg-dateOfBirth">Date of birth</label>
          <input
            id="reg-dateOfBirth"
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleChange}
            autoComplete="bday"
          />
          {errors.dateOfBirth && (
            <div className="error" role="alert">
              {errors.dateOfBirth}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="reg-address">Street address</label>
          <input
            id="reg-address"
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            autoComplete="street-address"
          />
          {errors.address && (
            <div className="error" role="alert">
              {errors.address}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="reg-city">City</label>
          <input
            id="reg-city"
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            autoComplete="address-level2"
          />
          {errors.city && (
            <div className="error" role="alert">
              {errors.city}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="reg-state">State / province</label>
          <input
            id="reg-state"
            type="text"
            name="state"
            value={state}
            onChange={handleChange}
            autoComplete="address-level1"
          />
          {errors.state && (
            <div className="error" role="alert">
              {errors.state}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="reg-country">Country</label>
          <input
            id="reg-country"
            type="text"
            name="country"
            value={country}
            onChange={handleChange}
            autoComplete="country-name"
          />
          {errors.country && (
            <div className="error" role="alert">
              {errors.country}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="reg-zipCode">ZIP or postal code</label>
          <input
            id="reg-zipCode"
            type="text"
            name="zipCode"
            value={zipCode}
            onChange={handleChange}
            autoComplete="postal-code"
          />
          {errors.zipCode && (
            <div className="error" role="alert">
              {errors.zipCode}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="reg-email">Email</label>
          <input
            id="reg-email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="email"
            inputMode="email"
          />
          {errors.email && (
            <div className="error" role="alert">
              {errors.email}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="reg-telephone">Telephone</label>
          <input
            id="reg-telephone"
            type="tel"
            name="telephone"
            value={telephone}
            onChange={handleChange}
            autoComplete="tel"
            inputMode="numeric"
            placeholder="555-555-5555"
          />
          {errors.telephone && (
            <div className="error" role="alert">
              {errors.telephone}
            </div>
          )}
        </div>
        <div className="form-group form-group--submit">
          <input
            type="submit"
            value="Register"
            aria-label="Submit registration form"
          />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm; 