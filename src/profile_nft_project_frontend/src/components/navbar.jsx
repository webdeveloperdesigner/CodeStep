import React from 'react';
import Login from './Login';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>CodeStep</h2>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/profile">Profile</a></li>
        <Login />
      </ul>
    </nav>
  );
};

export default Navbar;
