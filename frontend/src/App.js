import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Schedule from './components/Schedule.js';
import Meals from './components/Meals.js';

import Rooms from './components/Rooms';
import ScheduleHeader from './components/ScheduleHeader';
import MealsHeader from './components/MealsHeader';

import LogoHeader from './components/LogoHeader';

import ShoppingHeader from './components/ShoppingHeader';
import ShoppingList from './components/ShoppingList';







export default function App() {
  
  return (
    <div>

      <LogoHeader />
      <br />
      <Navbar />

      
      <ShoppingHeader />
      <ShoppingList />
      <Navbar />
      <ScheduleHeader />
      <Schedule />
      <Navbar />
      <MealsHeader />
      <Meals />
      <Navbar />
      
      <Rooms />
     
    </div>
 

    
    
  );
}






