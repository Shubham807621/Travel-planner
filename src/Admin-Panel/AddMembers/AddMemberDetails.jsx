import React, { useState } from 'react';
import './addmembers.css'
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';


 function AddMemberDetails() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ fname: '',lname:'', email: '',phone:'',id:'',file:null });
  const [submittedMembers, setSubmittedMembers] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChange1 = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMembers([...submittedMembers, formData]);
    setFormData({ fname: '',lname:'', email: '',phone:'',id:'' }); // Reset form
    setShowModal(false); // Hide modal
  };

  return (
    <div className="signup-section">
      <div className="signup-image-wrapper">
        <div className="image-banner"></div>
        <div className="signup-content">
          
          <div className="bread-crumb mt-2">
            <ul className="d-flex">
              <li className="arrow-icon">
                <span className="me-2"><HomeIcon /></span>
                <Link to="/">Home</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-4 position-relative" style={{ minHeight: '200px' }}>

        <h2 className='mb-3'>Please Add the Member Details Here</h2>
        {!showModal && submittedMembers.length === 0 && (
          <button className="btn btn-primary p-2" onClick={() => setShowModal(true)}>
            Add Member
          </button>
        )}

        {/* Modal */}
        {showModal && (
          <>
            <div className="custom-modal-backdrop"></div>
            <div
              className="modal d-block"
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                width: '100%',
                maxWidth: '700px',
                overflow: 'hidden',
              }}
            >
              <div className="modal-content custom-modal">
                <form onSubmit={handleSubmit}>
                  <div className="modal-header border-0">
                    <h5 className="modal-title">Add Member</h5>
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                      <label className="form-label text-left">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label text-left">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 mb-3">
                        <label className="form-label">Upload Document</label>
                        <input
                        type="file"
                        className="form-control"
                        onChange={handleChange1}
                        required='required'
                        />
                        <h6>Upload Adharcard/Driving License/Pan card</h6>
                    </div>
                    </div>
                  </div>
                  <div className="modal-footer border-0">
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}

        {/* Show Submitted List and Add More Button */}
        {!showModal && submittedMembers.length > 0 && (
          <div className="p-4 border rounded shadow-sm bg-light mt-3">
        <h4 className='datatitle'>Submitted Members:</h4>
        <table className="table mt-3">
          <thead className="thead-dark">
            <tr>
              <th>Sr. no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Document</th>
            </tr>
          </thead>
          <tbody>
            {submittedMembers.map((member, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{member.fname} {member.lname}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>{member.file ? member.file.name : 'No file'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary mt-4" onClick={() => setShowModal(true)}>
          Add More Members
        </button>
      </div>

        )}
      </div>
        <button className="continue-btn my-4" onClick={() => navigate("/booking")}>
          Continue Your Booking
        </button>

</div>
      
  );
}
export default AddMemberDetails;