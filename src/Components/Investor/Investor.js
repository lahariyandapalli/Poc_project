import React, { useState } from 'react';
import './Investor.css';

const InvestorPage = () => {
  const [formData, setFormData] = useState({
    lineOfBusiness: '',
    firmName: '',
    location: '',
    country: '',
    contactPerson: '',
    jobTitle: '',
    officialEmail: '',
    landline: '',
    mobile: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Validation logic here...

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Investor sign-up successful!');
    // You can add logic here to submit the data
  };

  return (
    <div className="investor-container">
      <h2>Investor Page</h2>
      <div className="scroll-container">
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label htmlFor="lineOfBusiness">Line of Business:</label>
            <select
              id="lineOfBusiness"
              name="lineOfBusiness"
              value={formData.lineOfBusiness}
              onChange={handleChange}
              required
            >
              <option value="">Select Line of Business</option>
              <option value="NBFC">NBFC</option>
              <option value="Investment Banking">Investment Banking</option>
              <option value="Banks">Banks</option>
              <option value="Insurance">Insurance</option>
              <option value="Mutual Fund">Mutual Fund</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="firmName">Name of the Firm:</label>
            <input
              type="text"
              id="firmName"
              name="firmName"
              value={formData.firmName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location of the Firm:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactPerson">Name of the Contact Person:</label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobTitle">Job Title:</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="officialEmail">Official E-mail ID:</label>
            <input
              type="text"
              id="officialEmail"
              name="officialEmail"
              value={formData.officialEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="landline">Contact Number - Landline:</label>
            <input
              type="text"
              id="landline"
              name="landline"
              value={formData.landline}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Contact Number - Mobile:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvestorPage;
