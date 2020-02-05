import React from 'react';
// import ShoppingList from './components/ShoppingList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Schedule from './components/Schedule.js';
import Meals from './components/Meals.js';

export default function Nav() {
  return (
    <div>
      <Navbar />
      <h1>Schedule</h1>
      <Schedule />
      <h1>Meals</h1>
      <Meals />
    </div>
 

    
    
  );
}




