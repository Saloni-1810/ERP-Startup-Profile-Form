// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";

const StartupProfileForm = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-2">Startup Profile Form</h1>
            <p className="text-center text-muted mb-4">Please fill in all mandatory fields marked with *</p>

            <form className="startup-form" onSubmit={handleSubmit}>
                {/* Personal Information Section */}
                <div className="form-section">
                    <h2><i className="bi bi-person me-2"></i>Personal Information</h2>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <label className="form-label">Full Name *</label>
                            <input type="text" name="fullName" className="form-control" placeholder="Enter full name" required onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Profile Picture</label>
                            <div className="upload-box col-md-6 d-flex align-items-center">
                                <div className="upload-icon col-md-6">
                                    <i className="bi bi-image"></i>
                                </div>
                                <button type="button" className="btn btn-upload ms-3">Upload</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Date of Birth *</label>
                            <input type="date" name="dob" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Gender *</label>
                            <select name="gender" className="form-select" required onChange={handleChange}>
                                <option value="">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Contact Number *</label>
                            <input type="tel" name="contactNumber" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email Address *</label>
                            <input type="email" name="email" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">LinkedIn Profile *</label>
                            <input type="url" name="linkedin" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Permanent Address</label>
                            <textarea name="address" className="form-control" rows="3" onChange={handleChange}></textarea>
                        </div>
                    </div>
                </div>

                {/* Company & Role Information */}
                <div className="form-section">
                    <h2><i className="bi bi-briefcase-fill me-2"></i>Company & Role Information</h2>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Founder ID</label>
                            <input type="text" name="founderId" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Company Name *</label>
                            <input type="text" name="companyName" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Designation *</label>
                            <input type="text" name="designation" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Company Establishment Date *</label>
                            <input type="date" name="companyEstDate" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Company Website *</label>
                            <input type="url" name="companyWebsite" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Industry Type *</label>
                            <select name="industryType" className="form-select" required onChange={handleChange}>
                                <option value="">Select Industry</option>
                                <option>Technology</option>
                                <option>Finance</option>
                                <option>Healthcare</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Professional Background */}
                <div className="form-section">
                    <h2><i className="bi bi-cash me-2"></i>Professional Background</h2>
                    <div className="row g-3">
                        <div className="col-12">
                            <label className="form-label">Previous Work Experience</label>
                            <textarea name="workExperience" className="form-control" rows="2" onChange={handleChange}></textarea>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Education Qualification *</label>
                            <input type="text" name="education" className="form-control" required onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Skills And Expertise *</label>
                            <select name="skills" className="form-select" required onChange={handleChange}>
                                <option value="">Select Skills</option>
                                <option>Leadership</option>
                                <option>Project Management</option>
                                <option>Communication</option>
                                <option>Problem Solving</option>
                                <option>Critical Thinking</option>
                                <option>Teamwork</option>
                                <option>Technical Proficiency</option>
                                <option>Data Analysis</option>
                                <option>Creativity</option>
                                <option>Time Management</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Notable Achievements</label>
                            <textarea name="achievements" className="form-control" rows="2" onChange={handleChange}></textarea>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Media/Press Mentions *</label>
                            <input type="url" name="mediaMentions" className="form-control" placeholder="https://" required onChange={handleChange} />
                        </div>
                    </div>
                </div>

                {/* Form Buttons */}
                <div className="form-buttons d-flex justify-content-end gap-3 mt-4">
                    <button className="btn btn-light" type="button">Cancel</button>
                    <button className="btn btn-primary" type="submit">Submit Form</button>
                </div>
            </form>
        </div>
    );
};

export default StartupProfileForm;








