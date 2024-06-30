import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const CalendarHeader = ({ month, year, onMonthChange }) => (
  <div className="flex items-center justify-between py-4 px-6">
    <div>
      <span className="text-lg font-bold">{MONTH_NAMES[month]}</span>
      <span className="ml-1 text-lg font-bold">{year}</span>
    </div>
    <div className='flex gap-x-2 lg:text-lg'>
      <button
        type="button"
        className="leading-none text-white rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
        disabled={month === 0}
        onClick={() => onMonthChange(month - 1)}
      >
       <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        type="button"
        className="leading-none  text-white rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
        disabled={month === 11}
        onClick={() => onMonthChange(month + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  </div>
);

export default CalendarHeader;
