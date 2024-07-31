
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight, faFan } from '@fortawesome/free-solid-svg-icons'

import {getAllData} from "../data/contents"
import Images from '../components/importImg';

import MusicPlay from '../components/MusicPlay';

const Meditation = () => {
    let data = getAllData()
    const [mItem, setMItem] = useState({})
    const [openM, setOpenM] = useState(false)
    const [openMChild, setOpenMChild] = useState(false)

    const activate = (e) => {
        const slider = document.querySelector(".slider");
        const items = document.querySelectorAll("#item"); // Changed ID to class for uniqueness
        if (e.currentTarget.classList.contains("next")) {
            slider.append(items[0]);
        } else if (e.currentTarget.classList.contains("prev")) {
            slider.prepend(items[items.length - 1]);
        }
    };

    const musicID = (item) => {
        setMItem(item)
        setOpenM(true)
    }

    const openFromChild = (newOpenM) => {
        setOpenM(newOpenM);
    };


    return(
        <div className='relative'>
            <div className={` ${openM || openMChild ? "":"hidden"}`}>
                <MusicPlay item={mItem} openM={openM} setOpenM={openFromChild}/>
            </div>
            <section className='absolute z-10 p-10'>
                <h1 className='text-white font-bold text-xl'><FontAwesomeIcon icon={faFan} /> Daily Meditation</h1>
            </section>
          
            <section className='relative'>
                <div className='slider h-lvh '>
                        <div 
                            id='item'
                            className='z-20 absolute top-60 w-44 h-44 -translate-y-1/2 bg-cover rounded-3xl  drop-shadow transition-all' 
                            style={{ backgroundImage: `url(${require('../assets/zenbreath/1.jpeg')})` }}>
                            <div className='content'>
                                <h2 className='title font-bold text-2xl'>"{data[1].name}"</h2>
                                <p className='description'>{data[1].meditation_goal}</p>
                                <button onClick={()=>musicID(data[1])}>Play Music</button>
                            </div>
                        </div>
                        <div 
                            id='item'
                            className='z-20 absolute top-60 w-44 h-44 -translate-y-1/2 bg-cover rounded-3xl  drop-shadow-3xl transition-all' 
                            style={{ backgroundImage: `url(${require('../assets/zenbreath/2.jpeg')})` }}>
                            <div className='content'>
                                <h2 className='title font-bold text-2xl'>"{data[2].name}"</h2>
                                <p className='description'>{data[2].meditation_goal}</p>
                                <button onClick={()=>musicID(data[2])}>Play Music</button>
                            </div>
                        </div>
                        <div 
                            id='item'
                            className='z-10 absolute top-60 w-44 h-44 -translate-y-1/2 bg-cover rounded-3xl drop-shadow-3xl transition-all' 
                            style={{ backgroundImage: `url(${require('../assets/zenbreath/3.jpeg')})` }}>
                            <div className='content'>
                                <h2 className='title font-bold text-2xl'>"{data[3].name}"</h2>
                                <p className='description'>{data[3].meditation_goal}</p>
                                <button onClick={()=>musicID(data[3])}>Play Music</button>
                            </div>
                        </div>
                        <div 
                            id='item'
                            className='z-10 absolute top-60 w-44 h-44 -translate-y-1/2 bg-cover rounded-3xl drop-shadow-3xl transition-all' 
                            style={{ backgroundImage: `url(${require('../assets/zenbreath/4.jpeg')})` }}>
                            <div className='content'>
                            <h2 className='title font-bold text-2xl'>"{data[4].name}"</h2>
                                <p className='description'>{data[4].meditation_goal}</p>
                                <button onClick={()=>musicID(data[4])}>Play Music</button>
                            </div>
                        </div>
                        <div 
                            id='item'
                            className='z-10 absolute top-60 w-44 h-44 -translate-y-1/2 bg-cover rounded-3xl drop-shadow-3xl transition-all' 
                            style={{ backgroundImage: `url(${require('../assets/zenbreath/5.jpeg')})` }}>
                            <div className='content'>
                                <h2 className='title font-bold text-2xl'>"{data[5].name}"</h2>
                                <p className='description'>{data[5].meditation_goal}</p>
                                <button onClick={()=>musicID(data[5])}>Play Music</button>
                            </div>
                        </div>
                        <div 
                            id='item'
                            className='z-10 absolute top-60 w-44 h-44 -translate-y-1/2 bg-cover rounded-3xl drop-shadow-3xl transition-all' 
                            style={{ backgroundImage: `url(${require('../assets/zenbreath/6.jpeg')})` }}>
                            <div className='content'>
                                <h2 className='title font-bold text-2xl'>"{data[6].name}"</h2>
                                <p className='description'>{data[6].meditation_goal}</p>
                                <button onClick={()=>musicID(data[6])}>Play Music</button>
                            </div>
                        </div>
                </div>
                <nav className='nav flex gap-x-4'>
                    <div
                        className='btn prev border w-10 h-10 rounded-full text-white bg-white backdrop-blur-[2px] bg-opacity-30 flex justify-center items-center hover:bg-opacity-50'
                        onClick={activate}
                    >
                            <FontAwesomeIcon icon={faChevronLeft}  />
                    </div>
                    <div 
                        className='btn next border w-10 h-10 rounded-full text-white bg-white backdrop-blur-[2px] bg-opacity-30 flex justify-center items-center hover:bg-opacity-50'
                        onClick={activate}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </nav>
            </section>
        </div>
    )
}

export default Meditation