import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { getBookingList } from '../../Components/APIServices/apiservice';
import { getPackageList } from '../../Components/APIServices/apiservice';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please check the console for errors.</h1>;
    }
    return this.props.children;
  }
}

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editedPackage, setEditedPackage] = useState({
      user: '', date: '', destination: '',
      id: '', status: '', enquiry: '', people: ''
    });
  
    const handleEdit = (index) => {
      setEditIndex(index);
      setEditedPackage(data[index]);
    };
  
    const handleInputChange = (e) => {
      setEditedPackage({ ...editedPackage, [e.target.name]: e.target.value });
    };
  
    const handleSave = () => {
      const updatedData = [...data];
      updatedData[editIndex] = editedPackage;
      setData(updatedData);
      setEditIndex(null);
    };
  
    const handleCancel = () => {
      setEditIndex(null);
    };
  
    const handleDelete = (index) => {
      const updatedData = data.filter((_, i) => i !== index);
      setData(updatedData);
    };
  
    const ITEMS_PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const paginatedData = data.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  
    const handleNext = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
  
    const handlePrev = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
  
  
    useEffect(() => {
      const fetchBooking = async () => {
        try {
          const response = await getBookingList();
          setData(response || []); // fallback to [] to prevent undefined
          console.log("📦 API response:", response);
        } catch (error) {
          console.error("Error fetching package list:", error);
        }
      };
  
      fetchBooking();
    }, []);
    useEffect(() => {
        const fetchPackages = async () => {
          try {
            const response = await getPackageList();
            setData1(response || []); // fallback to [] to prevent undefined
              // console.log("📦 API response:", response);
          } catch (error) {
            console.error("Error fetching package list:", error);
          }
        };
    
        fetchPackages();
      }, []);
  
  return (
    <ErrorBoundary>
      <div className="dashboard-container">
        <h2 >Dashboard Overview</h2>
        
        {/* Stats Cards */}
        <div className="dashboard-cards mb-5 px-2">
          <div className="status-card ">
    
              <i className="fas fa-chart-bar"></i>
              <div>
                <h3 className="">Today Views</h3>
                <p className="">22,520</p>
              </div>
  
          </div>
          <div className="status-card">
           
              <i className="fas fa-dollar-sign "></i>
              <div>
                <h3 className="">Earnings</h3>
                <p className="">16,520</p>
              </div>
   
          </div>
          <div className="status-card">

              <i className="fas fa-users "></i>
              <div>
                <h3 className="">Users</h3>
                <p className="">18,520</p>
              </div>

          </div>
          <div className="status-card">
        
              <i className="fas fa-envelope "></i>
              <div>
                <h3 className="">Enquiry</h3>
                <p className="">19,520</p>
              </div>
         
          </div>
        </div>

        {/* Tables Section */}
        <div className="px-2">
          {/* Recent Booking Table */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Recent Booking</h3>
            <p className="text-gray-600 mb-4">Airport Hotels The Right Way To Start A Short Break Holiday</p>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  
                  <th className="p-2 text-left">USER</th>
                  <th className="p-2 text-left">DATE</th>
                  <th className="p-2 text-left">CITY</th>
                  <th className="p-2 text-left">TOTAL PRICE</th>
                  <th className="p-2 text-left">HOTEL NAME</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((pkg, index) => {
              const actualIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
              return (
                <tr key={actualIndex} className={actualIndex % 2 === 0 ? "even-row" : ""}>
                  {editIndex === actualIndex ? (
                    <>
                      <td><input type="text" name="user" value={editedPackage.user} onChange={handleInputChange} /></td>
                      <td><input type="text" name="date" value={editedPackage.date} onChange={handleInputChange} /></td>
                      <td><input type="text" name="destination" value={editedPackage.destination} onChange={handleInputChange} /></td>
                      <td><input type="text" name="id" value={editedPackage.id} onChange={handleInputChange} /></td>
                      <td>
                        <select name="status" value={editedPackage.status} onChange={handleInputChange}>
                          <option value="Approve">Approve</option>
                          <option value="Pending">Pending</option>
                          <option value="Reject">Reject</option>
                        </select>
                      </td>
                      <td><input type="text" name="enquiry" value={editedPackage.enquiry} onChange={handleInputChange} /></td>
                      <td><input type="text" name="people" value={editedPackage.people} onChange={handleInputChange} /></td>
                      <td>
                        <button className="btn save" onClick={handleSave}>💾</button>
                        <button className="btn cancel" onClick={handleCancel}>❌</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td><strong>{pkg.name}</strong></td>
                      <td>{pkg.startDate}</td>
                      <td>{pkg.cityName}</td>
                      
                      <td>{pkg.totalPrice}</td>
                      <td>{pkg.hotelName}</td>
                      
                    </>
                  )}
                </tr>
              );
            })}
              </tbody>
            </table>
          </div>

          {/* Package Enquiry Table */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Package Enquiry</h3>
            <p className="text-gray-600 mb-4">Airport Hotels The Right Way To Start A Short Break Holiday</p>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  
                  
                  <th className="p-2 text-left">NAME</th>
                  <th className="p-2 text-left">DATE</th>
                  <th className="p-2 text-left">DESTINATION</th>
                  <th className="p-2 text-left">PRICE</th>
                  
                </tr>
              </thead>
              <tbody>
                {data1.map((pkg, index) => {
              const actualIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
              return (
                <tr key={actualIndex} className={actualIndex % 2 === 0 ? "even-row" : ""}>
                  {editIndex === actualIndex ? (
                    <>
                      <td><input type="text" name="name" value={editedPackage.name} onChange={handleInputChange} /></td>
                      <td><input type="text" name="date" value={editedPackage.date} onChange={handleInputChange} /></td>
                      <td><input type="text" name="destination" value={editedPackage.destination} onChange={handleInputChange} /></td>
                      <td>
                        <select name="status" value={editedPackage.status} onChange={handleInputChange}>
                          <option value="Active">Active</option>
                          <option value="Pending">Pending</option>
                          <option value="Expired">Expired</option>
                        </select>
                      </td>
                      <td>
                        <button className="btn save" onClick={handleSave}>💾</button>
                        <button className="btn cancel" onClick={handleCancel}>❌</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td><strong>{pkg.packageName}</strong></td>
                      <td>{pkg.durationInDays}</td>
                      <td>{pkg.cityName}</td>
                      <td><span className="status-active">{pkg.price}</span></td>
                      
                    </>
                  )}
                </tr>
              );
            })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Dashboard;