import React from 'react';
import './home.css';


function Navigation() {
  return (
    

    <nav role="navigation">
      <div id="menuToggle">
        {/* A fake / hidden checkbox is used as click reciever,
            so you can use the :checked selector on it. */}
        <input type="checkbox" />

        {/* Some spans to act as a hamburger.
            They are acting like a real hamburger,
            not that McDonald's stuff. */}
        <span></span>
        <span></span>
        <span></span>

        {/* Too bad the menu has to be inside of the button
            but hey, it's pure CSS magic. */}
        <ul id="menu">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Login</li></a>
          <a href="#"><li>Sign-Up</li></a>
          <a href="#"><li>Check Details</li></a>
          {/* <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a> */}
        </ul> 
        <h1>Looking for Comfy Restaurants Around?
            
            
        </h1>
      </div>
    </nav>
  );
}

export default Navigation;
