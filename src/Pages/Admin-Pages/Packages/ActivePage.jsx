import React, { useState } from 'react';
import './packagestatus.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const initialData = [
  { name: "Singapore Holiday Tour", date: "12 May", destination: "Japan", status: "Active" },
  { name: "New Year's Eve in Paris", date: "12 May", destination: "Japan", status: "Active" },
  { name: "Paris Honeymoon Tour", date: "12 May", destination: "Japan", status: "Active" },
  { name: "Japan Holiday Tour", date: "12 May", destination: "Japan", status: "Active" },
  { name: "California Trip", date: "12 May", destination: "Japan", status: "Active" },
  { name: "Dubai Tour", date: "12 May", destination: "Japan", status: "Active" }
];

function ActivePage() {
  const [data, setData] = useState(initialData);
  const [editIndex, setEditIndex] = useState(null);
  const [editedPackage, setEditedPackage] = useState({ name: '', date: '', destination: '', status: '' });

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

  return (
    <div className="container">
      <div className="activeform">
        <h4>ACTIVE PACKAGES LIST</h4>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>DATE</th>
              <th>DESTINATION</th>
              <th>STATUS</th>
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
          <td><strong>{pkg.name}</strong></td>
          <td>{pkg.date}</td>
          <td>{pkg.destination}</td>
          <td><span className="status-active">{pkg.status}</span></td>
          <td>
            <button className="btn edit" onClick={() => handleEdit(actualIndex)}><EditOutlinedIcon/></button>
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

export default ActivePage;
