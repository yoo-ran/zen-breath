import React from 'react';

const CalendarCells = ({ noOfDays, blankDays, events, month, year, isToday, showEventModal }) => (
  <div className="flex flex-wrap">
    {blankDays.map((_, index) => (
      <div key={index} style={{ width: '14.28%', height: '4rem' }} className="text-center  px-4 pt-2"></div>
    ))}
    {noOfDays.map((date, index) => (
      <div key={index} style={{ width: '14.28%', height: '4rem' }} className="px-4 pt-2  relative">
        <div
          onClick={() => showEventModal(date)}
          className={`inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 ${isToday(date) ? 'bg-darkorange text-white' : 'hover:bg-blue hover:bg-opacity-30'}`}
        >
          {date}
        </div>
        <div style={{ height: '80px' }} className="overflow-y-auto mt-1">
          {events
            .filter(event => new Date(event.event_date).toDateString() === new Date(year, month, date).toDateString())
            .map((event, index) => (
              <div
                key={index}
                className={`px-2 py-1 rounded-lg mt-1 overflow-hidden border}`}
              >
                <p className="text-sm truncate leading-tight">{event.event_title}</p>
              </div>
            ))}
        </div>
      </div>
    ))}
  </div>
);


export default CalendarCells;
