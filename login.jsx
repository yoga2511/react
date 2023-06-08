// import React from 'react';
// import './login.css';
// function LoginForm() {
//   return (
//     <body>
//       <div className="container">
//         <section id="content">
//           <form action="">
//             <h1>Login Form</h1>
//             <div>
//                 <input
//                   type="text"
//                   placeholder="Email"
//                   required
//                 />
//               </div>
//             <div>
//               <input type="password" placeholder="Password" required="" id="password" />
//             </div>
//             <div>
//               <input type="submit" value="Log in" />
//               <a href="#">forget your password?</a>
//               <a href="#">Don't have an account?SignUp</a>
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
// import React, { Component } from 'react';
// import axios from 'axios';
// import './sign-up.css';
// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: ''
//     };
//   }



//   handleEmailChange = (event) => {
//     this.setState({ email: event.target.value });
//   };

//   handlePasswordChange = (event) => {
//     this.setState({ password: event.target.value });
//   };


//   handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
   
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
//               <h1>Login Form</h1>
             
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
//                 <input type="submit" value="Login" />
//                 {/* <a href="#">Already have an account?</a> */}
//               </div>
//             </form>
//           </section>
//         </div>
//     );
//   }
// }

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import './sign-up.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
      id:'',
      email: email,
      password: password
    };
    try {
      const response = await axios.post('http://localhost:8080/email/logging', data);
      // Handle successful response
      console.log(response.data);
      if(response.data==="Login Successfull")
      {
        alert(response.data);
        // navigate('/homepage1');
        
      }
      else{
        alert(response.data);

      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div className="containing">
      <section id="contented">
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
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
            <input type="submit" value="Login" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
