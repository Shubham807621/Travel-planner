import React, { useState } from 'react';
import './addmembers.css'
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';


 function AddMemberDetails() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ fname: '',lname:'', email: '',phone:'',id:'',file:null });
  const [submittedMembers, setSubmittedMembers] = useState([]);

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
        {/* Add Member Button */}
        {!showModal && submittedMembers.length === 0 && (
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
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
            <h4>Submitted Members:</h4>
            <ul className="list-group list-group-flush mt-3">
            {submittedMembers.map((member, index) => (
                <li key={index} className="list-group-item">
                <div className="row">
                    <div className="col-md-3"><strong>{index + 1}. Name:</strong> {member.fname} {member.lname}</div>
                    <div className="col-md-3"><strong>Email:</strong> {member.email}</div>
                    <div className="col-md-3"><strong>Phone:</strong> {member.phone}</div>
                    <div className="col-md-3"><strong>Document:</strong> {member.file ? member.file.name : 'No file'}</div>
                </div>
                </li>
            ))}
            </ul>
            <button className="btn btn-primary mt-4" onClick={() => setShowModal(true)}>
              Add More Members
            </button>
          </div>
        )}
      </div>
</div>
      
  );
}
export default AddMemberDetails;