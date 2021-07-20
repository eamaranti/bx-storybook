import React from 'react';
import logo from '../images/logo-blue2.svg';

var Welcome = () => {
  return (
    <div className="m-5 text-center">
      <h1>StoryBook BlueExpress</h1>
      <img src={logo} alt="Blue Express" width="200"/>
    </div>
  );
};

export default  Welcome;
Welcome.displayName = 'Welcome';