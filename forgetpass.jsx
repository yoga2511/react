// import React from 'react';
// import './login.css';
// function LoginForm() {
//   return (
//     <body>
//       <div className="container">
//         <section id="content">
//           <form action="">
//             <h1>Create New Password</h1>
//             <div>
//               <input type="text" placeholder="Email" required="" id="email" />
//             </div>
//             <div>
//               <input type="password" placeholder="New Password" required="" id="password" />
//             </div>
//             <div>
//               <input type="password" placeholder="Password" required="" id="password" />
//             </div>
//             <div>
//               <input type="submit" value="create password" />
//               {/* <a href="#">forget your password?</a> */}
//               <a href="#">Back to login</a>
//             </div>
//           </form>
//           {/* <div className="button">
//             <a href="#">Download source file</a>
//           </div> */}
//         </section>
//       </div>
//     </body>
//   );
// }

// export default LoginForm;


import React, { useState } from 'react';
import './login.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a JSON object with the form data
    const data = {
      email: email,
      newpassword: newPassword,
      confirmpassword: confirmPassword
    };

    try {
      const response = await fetch('http://localhost:8080/postpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
console.log(response.ok);
      if (response.ok) {
        // Successful request
        console.log('Password created successfully!');
        // Reset the form
        setEmail('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        // Request failed
        console.log('Failed to create password.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <body>
      <div className="containers">
        <section id="cont">
          <form onSubmit={handleSubmit}>
            <h1>Create New Password</h1>
            <div>
              <input
                type="text"
                placeholder="Email"
                required=""
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="New Password"
                required=""
                id="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                required=""
                id="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <input type="submit" value="create password" />
              <a href="#">Back to login</a>
            </div>
          </form>
        </section>
      </div>
    </body>
  );
}

export default LoginForm;

