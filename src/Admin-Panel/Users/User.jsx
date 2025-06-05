import React, { useState } from 'react'
import EditIcon from "@mui/icons-material/Edit";
import './User.css'

export default function User() {
      const [showModal, setShowModal] = useState(false);
    const [selectedEmpId, setSelectedEmpId] = useState(null);
    const [formData, setFormData] = useState({ userName: '', roleCode: '' });

    const [employees, setEmployees] = useState([
  {
    name: "Shubham Musale",
    userName: "shubham.m",
    roleCode: "HR"
  },
  {
    name: "Anjali Verma",
    userName: "anjali.v",
    roleCode: "DEV"
  },
  {
    name: "Rahul Mehta",
    userName: "rahul.m",
    roleCode: "HR"
  },
  {
    name: "Priya Sharma",
    userName: "priya.s",
    roleCode: "DEV"
  }
]);

  const openEditModal = (emp) => {
        setFormData({
            userName: emp.userName || '',
            roleCode: emp.roleCode || '', // Ensure correct role mapping
        });
        setSelectedEmpId(emp.id);
        setShowModal(true);
    };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
      const handleSubmit = async () => {
        if (!formData.userName || !formData.roleCode) {
            alert("Please fill in all fields.");
            return;
        }

        const employeeData = {
            userName: formData.userName,
            roleCode: formData.roleCode,
        };

        try {
           const response =  await updateRole(employeeData);
           console.log(response)
            fetchUserList(); // Refresh the user list after update
            setShowModal(false);
        } catch (error) {
            console.error("Error updating role:", error);
            alert("Failed to update role.");
        }
    };


  return (
    <>
        <div className="user-wrapper row2">
                <div className='emp-list-contrainer'>
                    <h6>Users List</h6>
                </div>

                <div className="table-responsive emp-table">
                    <table className="table table-hover align-middle">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((emp, index) => (
                                <tr key={index}>
                                    <td><p className='emp-title my-0'>{emp.name}</p></td>
                                    <td style={{ color: 'gray' }}>{emp.userName}</td>
                                    <td>
                                        <span
                                            className="badge"
                                            style={{
                                                backgroundColor: emp.roleCode === "HR" ? "#9576b046" : "#d95f945d",
                                                color: emp.roleCode === "HR" ? "#483b53f4" : "#a9064da5"
                                            }}
                                        >
                                            {emp.roleCode}
                                        </span>
                                    </td>
                                    <td>
                                        <EditIcon className="fs-5 me-2 cursor-pointer" onClick={() => openEditModal(emp)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                    {showModal && (
                        <div className="modal-backdrop">
                            <div className="modal-box">
                                <div className="modal-header">
                                    <h4>Edit User Role</h4>
                                    <button className="close-btn" onClick={() => setShowModal(false)}>&times;</button>
                                </div>

                                <div className="form-grid mt-2">
                                    <div className="form-group">
                                        <label>User Name</label>
                                        <input name="userName" value={formData.userName} onChange={handleChange} disabled />
                                    </div>
                                    <div className="form-group">
                                        <label>Role</label>
                                        <select name="roleCode" value={formData.roleCode} onChange={handleChange}>
                                            <option value="">Select</option>
                                            <option value="Employee">Employee</option>
                                            <option value="HR">HR</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button className="btn btn-light" onClick={() => setShowModal(false)}>Cancel</button>
                                    <button className="btn btn-success" onClick={handleSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                    )}

        </div>
    </>
  )
}
