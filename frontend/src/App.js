import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Schedule from './components/Schedule.js';
import Meals from './components/Meals.js';
import Annoucements from './components/Announcements';
import Rooms from './components/Rooms';
import ScheduleHeader from './components/ScheduleHeader';
import MealsHeader from './components/MealsHeader';
import BedroomsHeader from './components/BedroomsHeader';
import LogoHeader from './components/LogoHeader';
import AnnouncementsHeader from './components/AnnouncementsHeader';
import ShoppingHeader from './components/ShoppingHeader';
import ShoppingList from './components/ShoppingList';





export default function App() {
  
  return (
    <div>

      <LogoHeader />
      <br />
      <Navbar />
      <AnnouncementsHeader />
      <Annoucements />
      <ShoppingHeader />
      <ShoppingList />
      <ScheduleHeader />
      <Schedule />
      <MealsHeader />
      <Meals />
      <BedroomsHeader />
      <Rooms />
    </div>
 

    
    
  );
}




