// src/components/Home.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

import {getAllData} from "../data/contents"
import HomeItem from '../components/HomeItem';
import Images from '../components/importImg';
import MusicItem from '../components/MusicItem';

const Home = () => {
    let data = getAllData()
    // const backgroundImageUrl = 'src/assets/zenbreath/1.jpeg'; // Replace with your image URL
    return (
    <div className='flex justify-between gap-x-8 h-lvh md:px-8 md:pt-8'>
        <section className='flex flex-col justify-between w-2/4 md:pb-8'>
            <div className=''>
                <h1 className={`font-head font-black md:text-3xl`}>Welcome, Elena</h1>
                <p>You have been 114 mindful days.</p>
            </div>

            <div>
                <p className='font-bold drop-shadow mb-4'>TODAY'S COMPILATION FOR YOU</p>
                <div className='flex flex-wrap gap-6'>
                    {
                         data
                         .filter(item => item.id <= 2)
                         .map(item => (
                             <HomeItem key={item.id} item={item} />
                         ))
                    }
                </div>
            </div>
            <div className='flex gap-x-6'>
                <div className=''>
                    <p className='font-bold drop-shadow mb-4 uppercase'>recently played</p>
                    <div>
                        {
                            data
                            .filter(item => item.id == 4)
                            .map(item => (
                                <HomeItem key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
                <div className=''>
                    <p className='font-bold drop-shadow mb-4 uppercase'>your favorites</p>
                    <div>
                        {
                            data
                            .filter(item => item.id == 5)
                            .map(item => (
                                <HomeItem key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>


        </section>

        <section className='flex flex-col justify-between items-center md:w-1/3 '>
            <article 
                style={{backgroundImage: `url(${Images[8]})`}}
                className='flex flex-col items-center justify-center bg-purple w-full text-white rounded-3xl text-center drop-shadow-text md:p-4 lg:h-32 '>
                <p className='drop-shadow md:mb-2'>Find your peace in every session</p>
                <button className={`bg-black rounded-full md:py-1.5 md:px-4 md:text-xs`}>Log My Streaks</button>
            </article>

            <article
                className='w-full h-full bg-cover rounded-3xl text-center drop-shadow md:h-72 lg:h-96 md:p-4 lg:py-10 bg-orange drop-shadow-bg backdrop-blur'>
                <div className='h-full flex flex-col items-center justify-between text-white'>
                    <div>
                        <h3 className='drop-shadow-text font-head font-bold md:text-xl lg:text-3xl'>Subscription</h3>
                        <p className='md:text-sm lg:text-lg lg:pt-4'>Embrace a Refreshed You</p>
                    </div>
                    <div>
                        <p className='line-through'>$12.48</p>
                        <p className='font-bold font-head text-darkorange md:text-3xl lg:text-6xl'>$4.99</p>
                        <span className='md:text-xs'>per month</span>
                    </div>
                    <div>
                        <button className='bg-black rounded-full md:py-1.5 md:px-4 md:text-xs lg:text-base'>Unlock 60% off</button>
                    </div>
                </div>
            </article>

            <article className='flex flex-col overflow-hidden drop-shadow w-full rounded-t-large text-white md:h-80  drop-shadow-text'>
                {data.map(item => (
                        <MusicItem key={item.id} item={item} />
                    ))}
            </article>
        </section>
    </div>
)
};

export default Home;
