import { useState } from 'react';
import './login.css'
import HomeIcon from '@mui/icons-material/Home';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { loginUser } from '../APIServices/apiservice';

function LoginForm() {
    const [values, setValues] = useState({
      userName: '',
      password: '',
    });

    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(""); // Clear previous errors
  
      try {
          const response = await loginUser(values);
  
          // If login is successful, store token and role, then navigate
          if (response?.token && response?.role) {
     
              localStorage.setItem("token", response.token);
              localStorage.setItem("role", response.role);
              localStorage.setItem('userId', response.userId);
              
              console.log("Login Successful:", response);
  
              navigate("/");
            } 
            else {
              setError(response.message || "Invalid credentials");
          }
      } catch (error) {
          setError(error.response?.data?.message || "Login failed. Please try again.");
      }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

  return (


    <section className="login-section">

        <div className="login-image-wrapper">
            <div className="image-banner"></div>
            <div className="login-content">
                <h2>LOG IN</h2>
                <div className="bread-crumb mt-2">
                    <ul className='d-flex '>
                        <li className='arrow-icon'>
                            <span className='me-2'><HomeIcon/></span> 
                            <Link to='/'>Home</Link>
                        </li>
                      
                        <li>Log In </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h3>Log In</h3>
                <div className="input-group">
                <label>Username</label>
                <input type="text" placeholder="username" name="userName" value={values.userName} onChange={handleChange} required/>
                </div>
                <div className="input-group">
                <label>Password</label>
                <input type="password" placeholder="password" name="password" value={values.password}  onChange={handleChange} required />
                </div>

                <div className="remember-forgot">
                
                    <Link to="/reset-password" className="forgot-password">Forgot Password?</Link>
                </div>

                <Button type="submit" className="login-btn">Log In</Button>
            </form>
        </div>
        <div className="signup-section">
        <p>
            Don’t have an account? <Link to="/sign-up">SIGN UP </Link>NOW
        </p>
        </div>
    </section>
  );
}

export default LoginForm;