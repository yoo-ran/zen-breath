import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const EventModal = ({ isOpen, setIsOpen, eventTitle, setEventTitle, eventDate, eventTheme, setEventTheme, addEvent }) => {
  if (!isOpen) return null;

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} className="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full">
      <div className="p-4 max-w-xl mx-auto relative absolute left-0 right-0 overflow-hidden mt-24">
        <div
          className="shadow absolute right-0 top-0 w-10 h-10 rounded-full bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="shadow w-full rounded-lg bg-white overflow-hidden w-full block p-8">
          <h2 className="font-bold text-2xl mb-6 text-gray-800 border-b pb-2">Add Event Details</h2>
          <div className="mb-4">
            <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Event title</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="text"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Event date</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="text"
              value={eventDate}
              readOnly
            />
          </div>
          <div className="inline-block w-64 mb-4">
            <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Select a theme</label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border-2 border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-gray-700"
                value={eventTheme}
                onChange={(e) => setEventTheme(e.target.value)}
              >
                <option value="blue">Blue Theme</option>
                <option value="red">Red Theme</option>
                <option value="yellow">Yellow Theme</option>
                <option value="green">Green Theme</option>
                <option value="purple">Purple Theme</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-8 text-right">
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm mr-2"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="text font-semibold py-2 px-4 border border-gray-700 rounded-lg shadow-sm"
              onClick={addEvent}
            >
              Save Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
