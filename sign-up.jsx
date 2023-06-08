// // import React from 'react';
// import './sign-up.css';
// // function LoginForm() {
// //   return (
// //     <body>
// //       <div className="container">
// //         <section id="content">
// //           <form action="">
// //             <h1>SignUp Form</h1>
// //             <div>
// //               <input type="text" placeholder="Username" required="" id="username" />
// //             </div>
// //             <div>
// //               <input type="password" placeholder="Password" required="" id="password" />
// //             </div>
// //             <div>
// //               <input type="password" placeholder="Confirm Password" required="" id="password" />
// //             </div>
// //             <div>
// //               <input type="submit" value="SignUp" />
// //               <a href="#">Already have a account?</a>
// //               {/* <a href="#">Register</a> */}
// //             </div>
// //           </form>
// //           {/* <div className="button">
// //             <a href="#">Download source file</a>
// //           </div> */}
// //         </section>
// //       </div>
// //     </body>
// //   );
// // }

// // export default LoginForm;



// import React, { useState } from 'react';
// import './sign-up.css';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Create an object with the form data
//     const userData = {
//       username: username,
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword
//     };

//     // Make an HTTP POST request to the backend
//     fetch('/registereduser', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Handle the response from the server
//         console.log(data);
//         // Reset the form fields if needed
//         setUsername('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//       })
//       .catch(error => {
//         // Handle any errors that occur during the request
//         console.error('Error:', error);
//       });
//   };

//   return (
    // <body>
    //   <div className="container">
    //     <section id="content">
    //       <form onSubmit={handleSubmit}>
    //         <h1>SignUp Form</h1>
    //         <div>
    //           <input
    //             type="text"
    //             placeholder="Username"
    //             required
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //           />
    //         </div>
    //         <div>
    //           <input
    //             type="text"
    //             placeholder="Email"
    //             required
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>
    //         <div>
    //           <input
    //             type="password"
    //             placeholder="Password"
    //             required
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //         <div>
    //           <input
    //             type="password"
    //             placeholder="Confirm Password"
    //             required
    //             value={confirmPassword}
    //             onChange={(e) => setConfirmPassword(e.target.value)}
    //           />
    //         </div>
    //         <div>
    //           <input type="submit" value="SignUp" />
    //           <a href="#">Already have an account?</a>
    //         </div>
    //       </form>
    //     </section>
    //   </div>
    // </body>
// );
// }

// export default LoginForm;
// import React, { Component } from 'react';
// import axios from 'axios';
// import './sign-up.css';

// import { Card, TextField, Button } from '@mui/material';
// import img from "./images/carlogo.png";
// import { Link } from 'react-router-dom';

// class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       confirmpassword: '',
//       email: '',
//       password: ''
//     };
//   }

//   handleUsernameChange = (event) => {
//     this.setState({ username: event.target.value });
//   };

//   handleEmailChange = (event) => {
//     this.setState({ email: event.target.value });
//   };

//   handlePasswordChange = (event) => {
//     this.setState({ password: event.target.value });
//   };

//   handleConfirmPasswordChange = (event) => {
//     this.setState({ confirmpassword: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
//     username: this.state.username,
//     confirmpassword: this.state.confirmpassword,
//     email: this.state.email,
//     password: this.state.password,
//     };
//     axios.post("http://localhost:8080/registereduser", data)
//   };

//   render() {
//     return (
//         <div className="container">
//           <section id="content">
//             <form onSubmit={this.handleSubmit}>
//               <h1>SignUp Form</h1>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   required
//                   value={this.state.username}
//                   onChange={this.handleUsernameChange}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Email"
//                   required
//                   value={this.state.email}
//                   onChange={this.handleEmailChange}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   required
//                   value={this.state.password}
//                   onChange={this.handlePasswordChange}
//                 />
//               </div>
//               <div>
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   required
//                   value={this.state.confirmpassword}
//                   onChange={this.handleConfirmPasswordChange}
//                 />
//               </div>
//               <div>
//                 <input type="submit" value="SignUp" />
//                 <a href="#">Already have an account?</a>
//               </div>
//             </form>
//           </section>
//         </div>
//     );
//   }
// }

// export default Signup;
import React, { useState } from 'react';
import axios from 'axios';
import './sign-up.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id:'',
      username: username,
      confirmpassword: confirmPassword,
      email: email,
      password: password,
    };
    axios.post("http://localhost:8080/email/'rpost", data);
  };

  return (
    <div className="container">
      <section id="content">
        <form onSubmit={handleSubmit}>
          <h1>SignUp Form</h1>
          <div>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <div>
            <input type="submit" value="SignUp" />
            <a href="#">Already have an account?</a>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;



