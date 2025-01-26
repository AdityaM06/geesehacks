import React from 'react';
import './home.css';

export default function Home() {
  // Get the current date and format it as Month Day (e.g., "January 25")
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <div className="home-container">
      {/* Title */}
      <h1 className="title">Stocks</h1>

      {/* Date */}
      <p className="date">{formattedDate}</p>

      {/* Placeholder for other components */}
      <div className="other-components">
        {/* You can add your other React components here */}
      </div>
    </div>
  );
}
