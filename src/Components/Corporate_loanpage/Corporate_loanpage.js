import React, { useState } from 'react';
import './Corporate_loanpage.css'; // Updated CSS file import

const CorporateLoan = () => {
  const [financialFiles, setFinancialFiles] = useState([]);
  const [kycType, setKycType] = useState('');
  const [kycFiles, setKycFiles] = useState([]);
  const [bankStatementFiles, setBankStatementFiles] = useState([]);
  const [currentBorrowingsFiles, setCurrentBorrowingsFiles] = useState([]);

  const handleFinancialFileChange = (e) => {
    const files = e.target.files;
    // Validate and set the financial files (up to 20MB each)
    setFinancialFiles(Array.from(files));
  };

  const handleKycTypeChange = (e) => {
    setKycType(e.target.value);
  };

  const handleKycFileChange = (e) => {
    const files = e.target.files;
    // Validate and set the KYC files
    setKycFiles(Array.from(files));
  };

  const handleBankStatementFileChange = (e) => {
    const files = e.target.files;
    // Validate and set the bank statement files
    setBankStatementFiles(Array.from(files));
  };

  const handleCurrentBorrowingsFileChange = (e) => {
    const files = e.target.files;
    // Validate and set the current borrowings files
    setCurrentBorrowingsFiles(Array.from(files));
  };

  return (
    <div className="loan-form"> {/* Updated CSS class name */}
      <h2>Corporate Loan Form</h2>
      <div className="financial-upload">
        <h3>Last Three Year Financials</h3>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          multiple
          onChange={handleFinancialFileChange}
        />
      </div>
      <div className="kyc-upload">
        <h3>Company KYC</h3>
        <select value={kycType} onChange={handleKycTypeChange}>
          <option value="">Select KYC Type</option>
          <option value="incorporate_certificate">Incorporate Certificate</option>
          <option value="pan">PAN</option>
          <option value="udiyam_certificate">Udiyam Certificate</option>
          <option value="moa_aoa">MOA/AOA</option>
        </select>
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          multiple
          onChange={handleKycFileChange}
        />
      </div>
      <div className="kyc-upload">
        <h3>Director KYC</h3>
        <select value={kycType} onChange={handleKycTypeChange}>
          <option value="">Select KYC Type</option>
          <option value="promotor">Promotor</option>
          <option value="director">Director</option>
          <option value="partner">Partner</option>
          <option value="authorized_signatory">Authorized Signatory</option>
        </select>
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          multiple
          onChange={handleKycFileChange}
        />
      </div>
      <div className="bank-statement-upload">
        <h3>Bank Statement for Last 12 Months</h3>
        <input
          type="file"
          accept=".pdf,.xls,.xlsx"
          multiple
          onChange={handleBankStatementFileChange}
        />
      </div>
      <div className="current-borrowings-upload">
        <h3>Current Borrowings</h3>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          multiple
          onChange={handleCurrentBorrowingsFileChange}
        />
      </div>
      {/* Add a submit button here */}
    </div>
  );
};

export default CorporateLoan;
