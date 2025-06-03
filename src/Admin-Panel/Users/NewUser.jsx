import React,{ useState } from "react";
import "./newuser.css"; // Make sure to create this CSS file
import { registerUser } from "../../Components/APIServices/apiservice";

const NewUser = () => {
    const [formData, setFormData] = useState({
     firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    roleCode:''
  
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    // Required fields
    for (let key in formData) {
      if (!formData[key]) newErrors[key] = "This field is required";
    }

    // Email format
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password match
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Phone number (numeric check)
    if (formData.phoneNumber && !/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone must be numeric";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

   const handleSubmit = async (e) => {
     e.preventDefault();
     const validationError = validate();
     setErrors(validationError);
 
     if (Object.keys(validationError).length === 0) {
       try {
         const response = await registerUser(formData); // Make sure this function is implemented elsewhere
         if (response?.code === 201) {
           alert('Registration successful! Please check your email for the verification code.');
         } else {
           setErrors({ general: 'Invalid or Email already exists!' });
         }
       } catch (err) {
         setErrors({ general: 'Something went wrong. Try again!' });
       }
     }
   };

  return (
    <div className="form-container">
      <div className='newuserform'>
        <h4>Add New User</h4>
      
        <form onSubmit={handleSubmit}>

          <div className='my-4'>
            <div className='d-flex input-container'>
              <div className="form-group">
                <label>Enter Your First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter Your First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span className="errors">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label>Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Your Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span className="errors">{errors.lastName}</span>}
              </div>
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
            
              />
              {errors.email && <span className="errors">{errors.email}</span>}
            </div>
            <div className='d-flex input-container'>
              <div className="form-group">
                <label>Password*</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <span className="errors">{errors.password}</span>}
              </div>
              <div className="form-group">
                <label>Confirm Password*</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <span className="errors">{errors.confirmPassword}</span>}
              </div>
            </div>
            <div className='d-flex input-container'>
              <div className="form-group">
                <label>Phone Number*</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter your Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && <span className="errors">{errors.phoneNumber}</span>}
              </div>
              <div className="form-group">
                <label>Add Role Code</label>
                <input
                  type="text"
                  name="roleCode"
                  placeholder="Enter role code"
                  value={formData.roleCode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <button type="submit" className='submit-btn'>Add User</button>
        </form>
       
      
      </div>
    </div>
  );
};

export default NewUser;