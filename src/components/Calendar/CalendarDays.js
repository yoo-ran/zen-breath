
import React from 'react';

const CalendarDays = ({ days }) => (
  <div className="">
    <div className="flex flex-wrap" style={{ marginBottom: '' }}>
      {days.map((day, index) => (
        <div key={index} style={{ width: '14.26%' }} className="px-2 py-2">
          <div className="text-white text-sm uppercase font-bold text-center">{day}</div>
        </div>
      ))}
    </div>
  </div>
);

export default CalendarDays;
