import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

import Images from '../components/importImg';

const MusicItem = ({ item }) => {

  return (
    
        <div 
            style={{backgroundImage: `url(${Images[item.id]})`}}
            className={`bg-orange flex justify-between items-center p-8`}>
                <div>
                    <span className='md:text-sm'>{item.meditation_goal}</span>
                    <p className='font-bold'>{item.name}</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCirclePlay} className='md:text-2xl opacity-80'/>
                </div>
        </div>


  );
};

export default MusicItem