import React from 'react';
// import ShoppingList from './components/ShoppingList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Schedule from './components/Schedule.js';
import Meals from './components/Meals.js';
import Annoucements from './components/Announcements';

export default function Nav() {
  return (
    <div>

      <Navbar />
      <Annoucements />
      <h1>Schedule</h1>
      <Schedule />
      <h1>Meals</h1>
      <Meals />
    </div>
 

    
    
  );
}




