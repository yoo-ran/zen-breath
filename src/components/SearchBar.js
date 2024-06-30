import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faSliders } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {

  return (
    
        <div className={`flex flex-col gap-y-4 items-center w-full`}>
            <div className='w-full'>
                <div className='flex justify-between items-center bg-purple w-full p-2 rounded-xl text-white shadow-inner'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input 
                        type='search'
                        className=' bg-transparent'
                    ></input>
                    <FontAwesomeIcon icon={faSliders} />
                </div>
            </div>
            <div className='flex justify-between gap-x-2 w-full'>
                <div className='flex items-center bg-purple py-1 px-2 rounded-full text-darkgray lg:text-sm drop-shadow'>Calmness</div>
                <div className='flex items-center bg-purple py-1 px-2 rounded-full text-darkgray lg:text-sm drop-shadow'>Energy</div>
                <div className='flex items-center bg-purple py-1 px-2 rounded-full text-darkgray lg:text-sm drop-shadow'>Positive</div>
                <div className='flex items-center bg-purple py-1 px-2 rounded-full text-darkgray lg:text-sm drop-shadow'>Blue</div>
            </div>
        </div>


  );
};

export default SearchBar