import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Images from '../components/importImg';

const HomeItem = ({ item }) => {
    console.log(item.id);
    console.log(Images);
    console.log(Images[item.id]);
  return (
        <div 
            style={{backgroundImage: `url(${Images[item.id-1]})`}}
            className={`relative overflow-hidden bg-purple rounded-3xl bg-cover bg-center flex flex-col justify-between md:h-52 w-64 lg:w-72 lg:h-80 md:p-4`}>
            <div className='absolute bg-black w-full h-full top-0 left-0 bg-opacity-30 backdrop-blur-[0.5px]'></div>
            <div className='z-10 flex justify-end  md:gap-x-2  md:text-sm'>
                {item.meditation_mood.map((mood,id) => (
                            <p key={id}  className='bg-white bg-opacity-50 backdrop-blur-sm drop-shadow md:px-2 md:py-0.5 rounded-full capitalize'>{mood}</p>
                        ))}
            </div>
            <div className='text-white flex flex-col items-center gap-y-2 drop-shadow-text text-center'>
                <p className='font-bold lg:text-2xl'>{item.name}</p>
                <p className='capitalize'>{item.meditation_goal}</p>
            </div>
            <div className='z-10 '>
                <p className='text-white lg:text-lg'><FontAwesomeIcon icon={faHeart} /></p>
            </div>
    </div>
  );
};

export default HomeItem