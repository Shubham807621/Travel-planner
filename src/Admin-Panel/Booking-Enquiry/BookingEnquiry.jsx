import React, { useEffect, useState } from 'react';
import './booking.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { getBookingList } from '../../Components/APIServices/apiservice';

// const initialData = [
//   { user: "Kirti Shinde", date: "12 May", destination: "Japan",id:"755", status: "Approve",enquiry:"15",people:"9" },
//   { user: "Vinay Shinde", date: "12 May", destination: "Japan", id:"755", status: "Pending",enquiry:"15",people:"9" },
//   { user: "Gopal Shinde", date: "12 May", destination: "Japan", id:"755", status: "Reject",enquiry:"15",people:"9" },
//   { user: "Girija Shinde", date: "12 May", destination: "Japan", id:"755", status: "Pending",enquiry:"15",people:"9" },
//   { user: "Namrata Shinde", date: "12 May", destination: "Japan", id:"755", status: "Reject",enquiry:"15",people:"9" },
//   { user: "Devansh Patil", date: "12 May", destination: "Japan", id:"755", status: "Approve",enquiry:"15",people:"9" }
// ];

function BookingEnquiry() {
  const [data, setData] = useState([]);
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

  return (
    <div className="booking-wrapper">
      <div className="activeform">
        <h4>RECENT BOOKING</h4>
        <table>
          <thead>
            <tr>
              <th>USER</th>
              <th>Start DATE</th>
              <th>DESTINATION</th>
              <th>Total Price</th>
   
              <th>Hotel Name</th>
              <th>ACTION</th>
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
                      <td>
                        <button className="btn edit" onClick={() => handleEdit(actualIndex)}><EditOutlinedIcon /></button>
                        <button className="btn delete" onClick={() => handleDelete(actualIndex)}>🗑️</button>
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={handlePrev} disabled={currentPage === 1}>◀ Prev</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNext} disabled={currentPage === totalPages}>Next ▶</button>
        </div>
      </div>
    </div>
  );
}
export default BookingEnquiry;