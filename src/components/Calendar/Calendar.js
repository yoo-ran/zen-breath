import React, { useState, useEffect } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarDays from './CalendarDays';
import CalendarCells from './CalendarCells';
import EventModal from './EventModal';

const Calendar = () => {
  const [today] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTheme, setEventTheme] = useState('blue');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const noOfDays = new Array(new Date(currentYear, currentMonth + 1, 0).getDate()).fill(null).map((_, i) => i + 1);
  const blankDays = new Array(new Date(currentYear, currentMonth).getDay()).fill(null);

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) setEvents(JSON.parse(storedEvents));
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = () => {
    setEvents([
      ...events,
      {
        event_title: eventTitle,
        event_date: eventDate,
        event_theme: eventTheme
      }
    ]);
    setIsModalOpen(false);
    setEventTitle('');
    setEventDate('');
  };

  const showEventModal = (date) => {
    setEventDate(`${currentMonth + 1}/${date}/${currentYear}`);
    setIsModalOpen(true);
  };

  const isToday = (date) => {
    const day = new Date(currentYear, currentMonth, date);
    return today.toDateString() === day.toDateString();
  };

  return (
      <div className="w-full h-full">
        <div>
          <div className="bg-white bg-opacity-30 backdrop-blur-3xl rounded-3xl border border-white shadow overflow-hidden">
            <CalendarHeader
              month={currentMonth}
              year={currentYear}
              onMonthChange={(newMonth) => {
                setCurrentMonth(newMonth);
                if (newMonth < 0) {
                  setCurrentMonth(11);
                  setCurrentYear(currentYear - 1);
                } else if (newMonth > 11) {
                  setCurrentMonth(0);
                  setCurrentYear(currentYear + 1);
                }
              }}
            />
            <CalendarDays days={DAYS} />
            <CalendarCells
              noOfDays={noOfDays}
              blankDays={blankDays}
              events={events}
              month={currentMonth}
              year={currentYear}
              isToday={isToday}
              showEventModal={showEventModal}
            />
          </div>
        </div>
        <EventModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          eventTitle={eventTitle}
          setEventTitle={setEventTitle}
          eventDate={eventDate}
          eventTheme={eventTheme}
          setEventTheme={setEventTheme}
          addEvent={addEvent}
        />
    </div>
  );
};

export default Calendar