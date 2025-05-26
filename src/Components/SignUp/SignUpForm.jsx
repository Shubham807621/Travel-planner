import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { registerUser } from '../APIServices/apiservice';

const SignUpForm = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
  });
  const navigate = useNavigate();

  const [error, setError] = useState({});
  const [message, setMessage] = useState('');

  const validate = () => {
    const newError = {};

    if (!values.firstName.trim()) newError.firstName = "First Name is required";
    if (!values.lastName.trim()) newError.lastName = "Last Name is required";

    if (!values.email.trim()) newError.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email)) newError.email = "Invalid email format";

    if (!values.password) newError.password = "Password is required";
    else if (values.password.length < 6)
      newError.password = "Password must be at least 6 characters";

    if (!values.confirmPassword) newError.confirmPassword = "Confirm your password";
    else if (values.confirmPassword !== values.password)
      newError.confirmPassword = "Passwords do not match";

    if (!values.phoneNumber.trim()) newError.phoneNumber = "Phone Number is required";
    else if (!/^\d{10}$/.test(values.phoneNumber))
      newError.phoneNumber = "Phone Number must be 10 digits";

    return newError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Values:', values);
    const validationError = validate();
    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      try {
        const response = await registerUser(values); // Make sure this function is implemented elsewhere
        if (response?.code === 201) {
          navigate('/login')
          setMessage('Registration successful! Please check your email for the verification code.');
        } else {
          setError({ general: 'Invalid or Email already exists!' });
        }
      } catch (err) {
        setError({ general: 'Something went wrong. Try again!' });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="signup-section">
      <div className="signup-image-wrapper">
        <div className="image-banner"></div>
        <div className="signup-content">
          <h2>SIGN UP</h2>
          <div className="bread-crumb mt-2">
            <ul className="d-flex">
              <li className="arrow-icon">
                <span className="me-2"><HomeIcon /></span>
                <Link to="/">Home</Link>
              </li>
              <li>Sign Up</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="signup-container">
        <h2>Sign Up</h2>
        {error.general && <div className="error">{error.general}</div>}
        {message && <div className="success">{message}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className='my-4'>
            <div className='d-flex input-container'>
              <div className="form-group">
                <label>Enter Your First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter Your First Name"
                  value={values.firstName}
                  onChange={handleChange}
                />
                {error.firstName && <span className="error">{error.firstName}</span>}
              </div>
              <div className="form-group">
                <label>Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Your Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                />
                {error.lastName && <span className="error">{error.lastName}</span>}
              </div>
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={values.email}
                onChange={handleChange}
            
              />
              {error.email && <span className="error">{error.email}</span>}
            </div>
            <div className='d-flex input-container'>
              <div className="form-group">
                <label>Password*</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
                {error.password && <span className="error">{error.password}</span>}
              </div>
              <div className="form-group">
                <label>Confirm Password*</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                {error.confirmPassword && <span className="error">{error.confirmPassword}</span>}
              </div>
            </div>
            <div className="form-group">
              <label>Phone Number*</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your Phone Number"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              {error.phoneNumber && <span className="error">{error.phoneNumber}</span>}
            </div>
          </div>

          <button type="submit" className='submit-btn'>Sign Up</button>
        </form>
      </div>

      <div className="f-bottom">
        <div className="auto-container">
          <div className="inner clearfix">
            <div className="copyright">
              Copyright &copy; 2022 Travel Planner. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
