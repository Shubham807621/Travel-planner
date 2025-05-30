import React, { useState } from "react";
import "./UserEditForm.css";

export default function UserEditForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dobDay: "",
        dobMonth: "",
        dobYear: "",
        countryCode: "+49701",
        phone: "",
        country: "Italy",
        state: "New York",
        city: "Tokyo",
        address: "",
        profilePhoto: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    return (
        <div className="user-edit-form">
            <div className="user-edit-form__box">
                <h2 className="user-edit-form__section-title">USER EDIT DETAILS</h2>
                <div className="user-edit-form__grid">
                    <div className="user-edit-form__field">
                        <label className="user-edit-form__label">First name</label>
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="user-edit-form__input"
                        />
                    </div>
                    <div className="user-edit-form__field">
                        <label className="user-edit-form__label">Last name</label>
                        <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="user-edit-form__input"
                        />
                    </div>
                    <div className="user-edit-form__field">
                        <label className="user-edit-form__label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="user-edit-form__input"
                        />
                    </div>
                    <div className="user-edit-form__field">
                        <label className="user-edit-form__label">Date of Birth</label>
                        <div className="user-edit-form__dob-group">
                            <select name="dobDay" value={formData.dobDay} onChange={handleChange} className="user-edit-form__select">
                                <option>Day</option>
                                {[...Array(31)].map((_, i) => <option key={i + 1}>{i + 1}</option>)}
                            </select>
                            <select name="dobMonth" value={formData.dobMonth} onChange={handleChange} className="user-edit-form__select">
                                <option>Month</option>
                                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, i) => (
                                    <option key={i + 1}>{m}</option>
                                ))}
                            </select>
                            <select name="dobYear" value={formData.dobYear} onChange={handleChange} className="user-edit-form__select">
                                <option>Years</option>
                                {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                    <option key={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="user-edit-form__field">
                        <label className="user-edit-form__label">Country Code</label>
                        <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="user-edit-form__select">
                            <option>+91</option>
                            <option>+94</option>
                            <option>+1</option>
                        </select>
                    </div>
                    <div className="user-edit-form__field">
                        <label className="user-edit-form__label">Phone Number</label>
                        <input name="phone" value={formData.phone} onChange={handleChange} className="user-edit-form__input" />
                    </div>
                </div>

                <h2 className="user-edit-form__section-title">CONTACT DETAILS</h2>
                <div className="user-edit-form__grid">
                    <div className="user-edit-form__field">
                        <label className="user-edit-form__label">Country</label>
                        <select name="country" value={formData.country} onChange={handleChange} className="user-edit-form__select">
                            <option>Italy</option>
                            <option>India</option>
                            <option>USA</option>
                        </select>
                    </div>
                    <div className="user-edit-form__field">
                        <label className="user-edit-form__label">State</label>
                        <select name="state" value={formData.state} onChange={handleChange} className="user-edit-form__select">
                            <option>New York</option>
                            <option>Maharashtra</option>
                            <option>California</option>
                        </select>
                    </div>
                    <div className="user-edit-form__field">
                        <label className="user-edit-form__label">City</label>
                        <select name="city" value={formData.city} onChange={handleChange} className="user-edit-form__select">
                            <option>Tokyo</option>
                            <option>Mumbai</option>
                            <option>Rome</option>
                        </select>
                    </div>
                    <div className="user-edit-form__field">
                        <label className="user-edit-form__label">Address</label>
                        <input name="address" value={formData.address} onChange={handleChange} className="user-edit-form__input" />
                    </div>
                </div>

                <h2 className="user-edit-form__section-title">UPLOAD PROFILE PHOTO</h2>
                <div className="user-edit-form__field">
                    <input type="file" name="profilePhoto" onChange={handleChange} className="user-edit-form__input" />
                </div>
            </div>
            {/* Describe Yourself Section */}
            <div className="user-edit-form__box">
                <h2 className="user-edit-form__section-title">DESCRIBE YOURSELF</h2>
                <div className="user-edit-form__field">
                    <label className="user-edit-form__label">Please Tell Us About You</label>
                    <textarea
                        name="about"
                        value={formData.about || ""}
                        onChange={handleChange}
                        className="user-edit-form__textarea"
                        rows="5"
                    ></textarea>
                </div>
                <div className="user-edit-form__submit">
                    <button className="user-edit-form__button">Upload Setting</button>
                </div>
            </div>
        </div>
    );
}
