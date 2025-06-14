 import React, { useState, useRef , useEffect } from 'react';
  import './AdminHeader.css';
  import SearchIcon from "@mui/icons-material/Search";
  import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import Badge from '@mui/material/Badge';
  import { styled } from '@mui/material/styles';
  import HomeIcon from '@mui/icons-material/Home';
  import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
  import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
  import PeopleIcon from '@mui/icons-material/People';
  import user from '../../Images/Users/user.jpg'
  import { Link, useLocation } from 'react-router-dom';

  import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
  import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
  import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
  import ExpandLessIcon from '@mui/icons-material/ExpandLess';
  import LoginIcon from '@mui/icons-material/Login';
  import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
  import LockResetIcon from '@mui/icons-material/LockReset';

import { useNavigate } from "react-router-dom"
import { getUserDetails } from '../../Components/APIServices/apiservice';

export default function AdminHeader() {

     const [selectedStatus, setSelectedStatus] = useState("Available");
    const [menuOpen, setMenuOpen] = useState(false);
    const [statusMenuOpen, setStatusMenuOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef(null);
    const location = useLocation();
    const sidebarRef = useRef(null);
    const hideElement = location.pathname.startsWith("/admin"); 
    const userRole = localStorage.getItem("role");

    const empId = localStorage.getItem("empId"); // Get logged-in employee ID
    const token = localStorage.getItem("token"); // Get logged-in employee ID
    const navigate = useNavigate();

      const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
        right: 7,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        backgroundColor: "red"
      },
    }));

     const toggleMenu = (menu) => {
      setOpenMenu(openMenu === menu ? null : menu);
    };

 const [employee , setEmployee] = useState({
        name:"",
        email:"",
    });

    const userId = localStorage.getItem("userId")

     useEffect(()=>{
          const fetchUserDetails = async ()=>{
        
            try {
              const response = await getUserDetails(userId);
             setEmployee(response);
              
            } catch (error) {
                console.error("Error fetching documents:", error);
              }
        
          };
          fetchUserDetails();
        
        },[userId])

 

  return (
    <>  
     {hideElement &&(

        <div className="admin-header-wrapper">
            <div className="container-fluid header">
                
                <div>
                    <h1 className="fw-bold"><Link to='/'>Travel Planner</Link></h1>
                </div>

        
                <div className="user-profile">
                    <div className="notification mx-4 mt-2">
                    <StyledBadge badgeContent=" ">
                        <NotificationsNoneIcon className="bell-icon" />
                    </StyledBadge>
                    </div>
                    <div className="profile-dropdown">
                        {/* Profile Button */}
                        <button className="profile-btn" onClick={() => setMenuOpen(!menuOpen)}>
                        <img
                            src={user}
                            alt="User"
                            className="profile-img"
                        />
                        <div className="profile-info">
                            <p className="fw-bold mb-0 d-none d-md-inline">{employee.name}</p>
                        
                        </div>
                        </button>

                            {/* Profile Dropdown Menu */}
                            {menuOpen && (
                            <div className="dropdown-menu show">
                                <div className="user-info">
                                    <img src={user}  className="user-img" alt="profile pic"/>
                                    <div>
                                        <h6 className="mb-0 fw-bold">{employee.name}</h6>
                                        <p className="text-muted small mb-0">{employee.email}</p>
                                    </div>
                                </div>

                                <Link className="dropdown-item">
                                    <AccountCircleOutlinedIcon className="me-2" /> My Profile
                                </Link>
                                <button className="dropdown-item">
                                    <SettingsOutlinedIcon className="me-2" /> Settings
                                </button>

                                <button
                                    className="dropdown-item text-danger"
                                    onClick={() => {
                                    localStorage.clear(); // ✅ Clears all stored data (token, empId, etc.)
                                    navigate("/"); // ✅ Redirect to Login page
                                    }}
                                >
                                    <ExitToAppOutlinedIcon className="me-2" /> Logout
                        </button>
                            </div>
                            )}
                    </div>
        
                </div> 
            </div>

            <div className={`sidebar px-4 `}>
    
                <div  className='main-item1 '>
                    <h3 className="text-secondary text-uppercase fs-6 fw-bold mt-3">Main</h3>
                    
                    <div className="d-flex align-items-center p-2 cursor-pointer">
                        <BarChartOutlinedIcon className="fs-5 me-2" />
                        <Link to='/admin/dashboard'>
                            <p className="fw-semibold main-title">Dashboard</p>
                        </Link>
                    </div>

                    <div className={` d-flex align-items-center justify-content-between p-2 cursor-pointer rounded-3 ${openMenu === "dashboard" ? "bg-primary text-light" : ""}`}  >
                        <div className="d-flex align-items-center ">
                        <PeopleIcon className="fs-5 me-2" />
                        <p className="fw-semibold main-title">Users</p>
                        </div>
                        {/* Expand Icon Clickable Only */}
                        <div onClick={() => toggleMenu("users")} className="cursor-pointer">
                            {openMenu === "users" ? (
                                <ExpandLessIcon className="transition" />
                            ) : (
                                <ExpandMoreIcon className="transition" />
                            )}
                        </div>
                    </div>
                    {openMenu === "users" && (
                        <div className="ms-5 sub-menu open">
                            <Link to="/admin/user" className={`submenu-item ${location.pathname === "/admin/user" ? "active" : "" }`}>
                                <p className="py-1">User</p>
                            </Link>
                    
                            <Link to='/admin/new-users' className={`submenu-item ${location.pathname === "/admin/new-users" ? "active" : ""}`}>
                                <p className="py-1 mt-2">New User</p>
                            </Link>
                        </div>
                    )}

                    <div className="d-flex align-items-center p-2 cursor-pointer">
                        <i className="fa-solid fa-umbrella-beach me-2"></i>
                    
                        <Link to='/admin/add-package'>
                            <p className="fw-semibold main-title">Add Package</p>
                        </Link>
                    </div>

                    <div className={` d-flex align-items-center justify-content-between p-2 cursor-pointer rounded-3 ${openMenu === "dashboard" ? "bg-primary text-light" : ""}`}  >
                        <div className="d-flex align-items-center ">
                        <LuggageOutlinedIcon className="fs-5 me-2" />
                        <p className="fw-semibold main-title">Package</p>
                        </div>
                        {/* Expand Icon Clickable Only */}
                        <div onClick={() => toggleMenu("package")} className="cursor-pointer">
                            {openMenu === "package" ? (
                                <ExpandLessIcon className="transition" />
                            ) : (
                                <ExpandMoreIcon className="transition" />
                            )}
                        </div>
                    </div>
                    {openMenu === "package" && (
                        <div className="ms-5 sub-menu open">
                            <Link
                                to="/admin/active-package"
                                className={`submenu-item ${
                                    location.pathname === "/active-package" ? "active" : ""
                                }`}
                            >
                                <p className="py-1">Active Package</p>
                            </Link>
                    
                            <Link to='/admin/pending-package' className={`submenu-item ${location.pathname === "/pending-package" ? "active" : ""}`}>
                                <p className="py-1 mt-2">Pending Package</p>
                            </Link>
                        </div>
                    )}
                    <div className="d-flex align-items-center p-2 cursor-pointer">
                        <i class="fa-solid fa-ticket me-2"></i>
                    
                        <Link to='/admin/enquiry-booking'>
                            <p className="fw-semibold main-title">Booking</p>
                        </Link>
                    </div>


                </div>
        
        

    
            <div className='main-item1'>
            <h3 className="text-secondary text-uppercase fs-6 fw-bold mt-4">AUTHENTICATION</h3>
            <div className="d-flex align-items-center p-2 cursor-pointer">
                <LoginIcon className="fs-5 me-2" />
                <Link to='/login'>
                <p className="fw-semibold main-title">Login</p>
                </Link>
            </div>
            <div className="d-flex align-items-center p-2 cursor-pointer">
                <AppRegistrationIcon className="fs-5 me-2" />
                <Link to='/sign-up'>
                    <p className="fw-semibold main-title">Register</p>
                </Link>
                </div>
            <div className="d-flex align-items-center p-2 cursor-pointer">
                <LockResetIcon className="fs-5 me-2" />
                <Link to='/reset-password'>
                    <p className="fw-semibold main-title">Reset Password</p>
                </Link>
                </div>
                
            </div>
            </div> 
        </div>
     )}
    </>
  )
}
