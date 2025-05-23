import React, { useState } from 'react';
import './contactus.css';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const ContactUs = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    msg: ''
    
  });
  const navigate = useNavigate();

  const [error, setError] = useState({});
  const [message, setMessage] = useState('');

  const validate = () => {
    const newError = {};

    if (!values.name.trim()) newError.name = "Name is required";
    

    if (!values.email.trim()) newError.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email)) newError.email = "Invalid email format";

    if (!values.phone.trim()) newError.phone = "Phone Number is required";
    else if (!/^\d{10}$/.test(values.phone))
      newError.phone = "Phone Number must be 10 digits";

    if (!values.subject.trim()) newError.subject = "Subject is required";
    return newError;
  };


    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log('User Data:', formData);
    } else {
      setSubmitted(false);
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
          <h2>CONTACT US</h2>
          <div className="bread-crumb mt-2">
            <ul className="d-flex">
              <li className="arrow-icon">
                <span className="me-2"><HomeIcon /></span>
                <Link to="/">Home</Link>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
        <h2 style={{fontWeight:"bold"}}>How can we Help?</h2>
        <p>Contact us and get strapped in for a better adventure experience in your life-time. <br/>
            Just look for opportunity to be with nature.</p>
      <div className="signup-container">
        
        {submitted && <div className="success">Submitted Successful!</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className='my-4'>
            <div className='d-flex input-container'>
              <div className="form-group">
                <label>Your Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={values.name}
                  onChange={handleChange}
                />
                {error.name && <span className="error">{error.name}</span>}
              </div>
              <div className="form-group">
                <label>Your Email*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email address"
                  value={values.email}
                  onChange={handleChange}
                />
                {error.email && <span className="error">{error.email}</span>}
              </div>
            </div>
            
            <div className='d-flex input-container'>
              <div className="form-group">
                <label>Your Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Your Phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                {error.phone && <span className="error">{error.phone}</span>}
              </div>
              <div className="form-group">
                <label>Your Subject*</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Your Subject"
                  value={values.subject}
                  onChange={handleChange}
                />
                {error.subject && <span className="error">{error.subject}</span>}
              </div>
              
            </div>

            <div className='d-flex input-container'>
              <div className="form-group">
                <label>Write Message</label>
                <textarea name='msg' rows="4" cols="95"
                value={values.msg}
                onChange={handleChange}
                ></textarea>
                
              </div>
              
              
            </div>
          </div>

          <button type="submit" className='submit-btn'>Submit Now</button>
        </form>
      </div>

      <div classname="map">
        <h2 style={{fontWeight:"bold"}}>Find Our Office on Map</h2>
        <p>Contact us and get strapped in for a better adventure experience in your life-time. <br/>
            Just look for opportunity to be with nature.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15285.
        156181954957!2d74.25314605000001!3d16.712423599999997!2m3!1f0!2f0!3f0!3m2!
        1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2zS29saGFwdXIg4KSV4KWL4KSy4KWN4KS54KS-
        4KSq4KWC4KSw!3m2!1d16.7049873!2d74.2432527!4m5!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra
        !3m2!1d16.7049873!2d74.2432527!5e0!3m2!1sen!2sin!4v1747851696928!5m2!1sen!2sin" width="600" height="450" 
        s
        tyle="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default ContactUs;
