// import React, { useState } from 'react';
// import './Sign_up.css';

// const Sign_up = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     firmName: '',
//     lineOfBusiness: '',
//     location: '',
//     country: '',
//     contactPerson: '',
//     jobTitle: '',
//     officialEmail: '',
//     landline: '',
//     mobile: '',
//   });

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//     setShowForm(true);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     if (
//       (name === 'lineOfBusiness' ||
//         name === 'firmName' ||
//         name === 'location' ||
//         name === 'country' ||
//         name === 'contactPerson' ||
//         name === 'jobTitle' ||
//         name === 'officialEmail') &&
//       !/^[A-Za-z0-9]+$/.test(value)
//     ) {
//       return;
//     }

//     if (
//       (name === 'landline' || name === 'mobile') &&
//       !/^[0-9]+$/.test(value)
//     ) {
//       return;
//     }

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert('Sign-up successful!');
//   };

//   return (
//     <div className="signup-container">
//       <div className="card">
//         <h2>Sign Up</h2>
//         <div className="input-group">
//           <label htmlFor="category">Select Category:</label>
//           <select
//             id="category"
//             name="category"
//             value={selectedCategory}
//             onChange={handleCategoryChange}
//           >
//             <option value="Investor">Investor</option>
//             <option value="Borrower">Borrower</option>
//           </select>
//         </div>

//         {showForm && (
//           <div className="form-container">
//             {/* <h3>Sign-Up Form</h3> */}
//             <form onSubmit={handleSubmit}>
//               <div className="input-group">
//                 <label htmlFor="firmName">Name of the Firm:</label>
//                 <input
//                   type="text"
//                   id="firmName"
//                   name="firmName"
//                   value={formData.firmName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="input-group">
//                 <label htmlFor="lineOfBusiness">Line of Business:</label>
//                 <select
//                   id="lineOfBusiness"
//                   name="lineOfBusiness"
//                   value={formData.lineOfBusiness}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Line of Business</option>
//                   {selectedCategory === 'Investor' ? (
//                     <>
//                       <option value="NBFC">NBFC</option>
//                       <option value="Investment Banking">Investment Banking</option>
//                       <option value="Banks">Banks</option>
//                       <option value="Insurance">Insurance</option>
//                       <option value="Mutual Fund">Mutual Fund</option>
//                     </>
//                   ) : selectedCategory === 'Borrower' ? (
//                     <>
//                       <option value="NBFC">NBFC</option>
//                       <option value="MFI">MFI</option>
//                       <option value="Corporate">Corporate</option>
//                       <option value="SME">SME</option>
//                     </>
//                   ) : null}
//                 </select>
//               </div>

//               <div className="input-group">
//                 <label htmlFor="location">Location of the Firm:</label>
//                 <input
//                   type="text"
//                   id="location"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="input-group">
//                 <label htmlFor="country">Country:</label>
//                 <input
//                   type="text"
//                   id="country"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="input-group">
//                 <label htmlFor="contactPerson">Name of the Contact Person:</label>
//                 <input
//                   type="text"
//                   id="contactPerson"
//                   name="contactPerson"
//                   value={formData.contactPerson}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="input-group">
//                 <label htmlFor="jobTitle">Job Title:</label>
//                 <input
//                   type="text"
//                   id="jobTitle"
//                   name="jobTitle"
//                   value={formData.jobTitle}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="input-group">
//                 <label htmlFor="officialEmail">Official E-mail ID:</label>
//                 <input
//                   type="text"
//                   id="officialEmail"
//                   name="officialEmail"
//                   value={formData.officialEmail}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="input-group">
//                 <label htmlFor="landline">Contact Number - Landline:</label>
//                 <input
//                   type="text"
//                   id="landline"
//                   name="landline"
//                   value={formData.landline}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="input-group">
//                 <label htmlFor="mobile">Contact Number - Mobile:</label>
//                 <input
//                   type="text"
//                   id="mobile"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <div className="btn-container">
//                 <button type="submit" className="submit-button">
//                   Sign Up
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sign_up;

import React, { useState } from 'react';
import './Sign_up.css';

const Sign_up = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleProceed = () => {
    if (selectedCategory === 'Investor') {
      // Redirect to the Investor page
      // You can implement the redirection logic here
    } else if (selectedCategory === 'Borrower') {
      // Redirect to the Borrower page
      // You can implement the redirection logic here
    }
  };

  return (
    <div className="signup-container">
      <div className="card">
        <h2>Sign Up</h2>
        <div className="input-group">
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select</option>
            <option value="Investor">Investor</option>
            <option value="Borrower">Borrower</option>
          </select>
        </div>

        <div className="btn-container">
          <button type="button" onClick={handleProceed} className="proceed-button">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sign_up;

