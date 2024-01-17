import React from 'react';
import DarkModeToggle from './DarkModeToggle'; // Import your DarkModeToggle component
import { UilCalendarAlt } from '@iconscout/react-unicons'
//creating header left,center,right
const Header = () => {
  return (
    <header className='header'>
      <div className='header-left'>
        <div className='day-and-date'>
          <UilCalendarAlt className="calendaricon" />
          <div className="date-and-day">
            <p>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p>
            <p>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
      <div className='header-center'>
        <h1 className="heading">TO-DO LIST MANAGER</h1>
      </div>
      <div className='header-right'>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;