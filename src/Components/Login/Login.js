// import React, { useState } from 'react';
// import './Login.css';

// function Login({ onNext }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleProceed = () => {
//     // Handle logic before proceeding to the next step
//     onNext();
//   };

//   return (
//     <div className="container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="email">Email address</label>
//             <input
//               type="email"
//               id="email"
//               className="form-control"
//               placeholder="Enter your email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="form-control"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="btn-container">
//             <button type="button" onClick={handleProceed} className="next-button">
//               Next
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
