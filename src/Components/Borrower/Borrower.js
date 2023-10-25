import React, { useState } from 'react';
import './Borrower.css';
import { useNavigate } from 'react-router-dom';

function BorrowerPage() {
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

  const [passwordData, setPasswordData] = useState({
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [currentPage, setCurrentPage] = useState('form');
  const navigate = useNavigate();

  const handleProceed = (direction) => {
    if (direction === 'next') {
      setCurrentPage('password');
    } else if (direction === 'back') {
      setCurrentPage('form');
    }
  };

  const handleNavigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="borrower-container">
      <h2>Borrower Page</h2>
      {currentPage === 'form' && (
        <div className="scroll-container">
          <form className="form-grid">
            <div className="form-group">
              <label htmlFor="lineOfBusiness">Line of Business:</label>
              <select
                id="lineOfBusiness"
                name="lineOfBusiness"
                value={formData.lineOfBusiness}
                onChange={(e) =>
                  setFormData({ ...formData, lineOfBusiness: e.target.value })
                }
                required
              >
                <option value="">Select Line of Business</option>
                <option value="NBFC">NBFC</option>
                <option value="MFI">MFI</option>
                <option value="Corporate">Corporate</option>
                <option value="SME">SME</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="firmName">Name of the Firm:</label>
              <input
                type="text"
                id="firmName"
                name="firmName"
                value={formData.firmName}
                onChange={(e) =>
                  setFormData({ ...formData, firmName: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, contactPerson: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, jobTitle: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, officialEmail: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, landline: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                required
              />
            </div>
          </form>
          <div className="button-container">
            <button type="button" onClick={() => handleProceed('next')} className="signup-button">
              Next
            </button>
          </div>
        </div>
      )}

      {currentPage === 'password' && (
        <div className="scroll-container">
          <form>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={passwordData.password}
                  onChange={(e) =>
                    setPasswordData({ ...passwordData, password: e.target.value })
                  }
                  required
                />
                <i
                  className={`password-toggle ${showPassword ? 'visible' : 'hidden'}`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData({ ...passwordData, confirmPassword: e.target.value })
                }
                required
              />
            </div>
          </form>
          <div className="button-container">
            <button type="button" onClick={() => handleProceed('back')} className="signup-button">
              Back
            </button>
            <button type="button" onClick={handleNavigateToHome} className="signup-button">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BorrowerPage;
