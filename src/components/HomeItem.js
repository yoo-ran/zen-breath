import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Images from '../components/importImg';

const HomeItem = ({ item }) => {

  return (
        <div 
            style={{backgroundImage: `url(${Images[item.id]})`}}
            className={`bg-purple rounded-3xl bg-cover bg-center flex flex-col justify-between md:h-52 md:w-8/12 md:p-4`}>
        <div className='flex justify-end  md:gap-x-2  md:text-sm'>
            {item.meditation_mood.map((mood,id) => (
                        <p key={id}  className='bg-white md:px-2 md:py-0.5 rounded-full'>{mood}</p>
                    ))}
        </div>
        <div className='text-white flex flex-col items-center drop-shadow'>
            <p>{item.name}</p>
            <p>{item.meditation_goal}</p>
        </div>
        <div>
            <p className='text-white'><FontAwesomeIcon icon={faHeart} /></p>
        </div>
    </div>
  );
};

export default HomeItem