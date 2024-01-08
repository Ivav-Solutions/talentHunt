import React from 'react'
import { useState } from 'react';

const Available = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    const generateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const totalDays = daysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);

        const calendar = [];
        // Fill the days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
        calendar.push(null);
        }

        // Fill the days of the month
        for (let day = 1; day <= totalDays; day++) {
        calendar.push(new Date(year, month, day));
        }
        return calendar;
  };
    const handlePrevMonth = () => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };
    const handleNextMonth = () => {
       setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };
    
  return (
    <div className="available-container">
        <div className="highlight-intro">
            <h1>Availabity</h1>
            <p>Use the calendar below to book this artist</p>
            <div className="rectangle-cards">
                <div className="rectangle1">
                    <div>
                      <p>Today</p>
                    </div>
                </div>

                <div className="rectangle2">
                    <div>
                      <p>Selected</p>
                    </div>
                </div>

                <div className="rectangle3">
                    <div>
                      <p>Available</p>
                    </div>
                </div>

                <div className="rectangle4">
                    <div>
                      <p>Unavailable</p>
                    </div>
                </div>
            </div>
            <div classname="calendar">
                <div className="calendar-container">
                    <div className="header">
                       <button onClick={handlePrevMonth}>Previous Month</button>
                       <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                       {/* <button onClick={handleNextMonth}>Next Month</button> */}
                    </div>

                    <table className="table">
                      <thead>
                         <tr>
                             <th>Sun</th>
                             <th>Mon</th>
                             <th>Tue</th>
                             <th>Wed</th>
                             <th>Thu</th>
                             <th>Fri</th>
                             <th>Sat</th>
                         </tr>
                     </thead>
                     <tbody>
                         {generateCalendar().map((date, index) => (
                             <td key={index}>
                                 {date && (
                                     <div className="day">
                                         {date.getDate()}
                                         {/* You can customize the content for each day as needed */}
                                      </div>
                                   )}
                               </td>
                           ))}
                     </tbody>
                  </table>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Available