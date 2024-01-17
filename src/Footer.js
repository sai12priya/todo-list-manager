
import React from "react";
import { IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
  // Function to get the quote based on the day
  const getQuoteByDay = (day) => {
    switch (day) {
      case 'Monday':
        return "“The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.” – Steve Jobs";
      case 'Tuesday':
        return "“Don't let yesterday take up too much of today.” – Will Rogers";
      case 'Wednesday':
        return "“The best way to predict the future is to create it.” – Peter Drucker";
      case 'Thursday':
        return "“The only person you are destined to become is the person you decide to be.” – Ralph Waldo Emerson";
      case 'Friday':
        return "“It's not how much you have, but how much you enjoy that makes happiness.” – Charles Spurgeon";
      case 'Saturday':
        return "“The future belongs to those who believe in the beauty of their dreams.” – Eleanor Roosevelt";
      case 'Sunday':
        return "“The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.” – Steve Jobs";
      default:
        return '';
    }
  };
//day with date func
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const quote = getQuoteByDay(currentDay);

  return (
    <div className="footer">
      <p>{quote}</p>
      <a href='https://www.linkedin.com/in/ssathelli/' target='_blank' rel="noopener noreferrer">
        <IoLogoLinkedin className='linkedin'/>
      </a>
    </div>
  );
};

export default Footer;
