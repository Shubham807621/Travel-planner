import React,{ useState } from "react";
import "./newuser.css"; // Make sure to create this CSS file

const NewUser = () => {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    phone: "",
    password: "",
    confirmPassword: "",
    email: "",
  
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
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone must be numeric";
    }

    if (formData.mobile && !/^\d+$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile must be numeric";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Submit to API or clear form here
    }
  };

  return (
    <div className="form-container">
      <div className='newuserform'>
        <h4>ADD NEW USER</h4>
      
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label>First name</label></td>
              <td><label>Last name</label></td>
              
            </tr>
            <tr>
              
              <td><input type="text" name="firstName" 
              value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
              </td>
              <td><input type="text" name="lastName" 
              value={formData.lastName}
                onChange={handleChange}
              />{errors.lastName && <span className="error">{errors.lastName}</span>}
              </td>
              
            </tr>
            <tr>
                <td><label>Mobile</label></td>        
            </tr>
            <tr>
                <td>
                  <input type="text" name="mobile" value={formData.mobile}
                  onChange={handleChange}/>
                  {errors.mobile && <span className="error">{errors.mobile}</span>}
                </td>
              
              
            </tr>
            <tr>
                <td><label>Password</label></td>
                <td><label>Confirm Password</label></td>
            </tr>
            <tr>
            <td><input type="password" name="password" value={formData.password}
                  onChange={handleChange}/>{errors.password && <span className="error">{errors.password}</span>}
                  </td>
              <td><input type="password" name="confirmPassword" value={formData.confirmPassword}
                  onChange={handleChange}/>
                  {errors.confirmPassword && (
                  <span className="error">{errors.confirmPassword}</span>
                )}
                  </td>
            </tr>
            <tr>
            <td><label>Email</label></td>

            </tr>
            <tr>
            <td>
              <input type="email" name="email" value={formData.email}
                  onChange={handleChange}/>{errors.email && <span className="error">{errors.email}</span>}
            </td>
            </tr>
            <tr className="form-actions">
               <button type="submit">Submit</button> 
            </tr>
          </tbody>
        </table>
        <div >
          
        </div>
      </form>
      </div>
    </div>
  );
};

export default NewUser;