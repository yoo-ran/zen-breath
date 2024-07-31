// src/components/Home.js
import React from 'react';

import {getAllData} from "../data/contents"
import HomeItem from '../components/HomeItem';
import Images from '../components/importImg';
import MusicItem from '../components/MusicItem';

const Home = () => {
    let data = getAllData()
    // const backgroundImageUrl = 'src/assets/zenbreath/1.jpeg'; // Replace with your image URL
    return (
    <div className='flex flex-col md:flex-row justify-between gap-x-4  px-8 pt-8 w-full  '>
        <section className='flex flex-col justify-between w-full gap-y-8 md:w-2/3 pb-8 md:h-lvh '>
            <div className=''>
                <h1 className={`font-head font-black text-xl md:text-2xl`}>Welcome, Elena</h1>
                <p>You have been 114 mindful days.</p>
            </div>

            <div className=''>
                <p className='font-bold drop-shadow mb-4 '>TODAY'S COMPILATION FOR YOU</p>
                <div className='flex gap-6'>
                    {
                         data
                         .filter(item => item.id <= 2)
                         .map(item => (
                             <HomeItem key={item.id} item={item} />
                         ))
                    }
                </div>
            </div>
            <div className='flex gap-x-6  '>
                <div className=' w-1/2 '>
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
                <div className=' w-1/2  '>
                    <p className='font-bold drop-shadow mb-4 uppercase'>your favorites</p>
                    <div className=''>
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

        <section className='flex flex-col justify-between items-center gap-y-8 md:w-1/3 '>
            <article 
                style={{backgroundImage: `url(${Images[8]})`}}
                className='flex flex-col items-center justify-center gap-y-2 bg-purple w-full text-white rounded-3xl text-center drop-shadow-text py-4 lg:h-32 '>
                <p className='drop-shadow md:mb-2'>Find your peace in every session</p>
                <button className={`bg-black rounded-full py-1.5 px-4 text-xs`}>Log My Streaks</button>
            </article>

            <article
                className='w-full h-full bg-cover rounded-3xl text-center drop-shadow md:h-72 lg:h-96 p-4 lg:py-10 bg-orange drop-shadow-bg backdrop-blur'>
                <div className='h-full flex flex-col items-center justify-between gap-y-4 text-white'>
                    <div>
                        <h3 className='drop-shadow-text font-head font-bold text-xl lg:text-3xl'>Subscription</h3>
                        <p className='md:text-sm lg:text-lg lg:pt-4'>Embrace a Refreshed You</p>
                    </div>
                    <div>
                        <p className='line-through'>$12.48</p>
                        <p className='font-bold font-head text-darkorange text-3xl lg:text-6xl'>$4.99</p>
                        <span className='md:text-xs'>per month</span>
                    </div>
                    <div>
                        <button className='bg-black rounded-full py-1.5 px-4 text-xs lg:text-base'>Unlock 60% off</button>
                    </div>
                </div>
            </article>

            <article className='flex flex-col overflow-hidden drop-shadow w-full rounded-t-large text-white   drop-shadow-text'>
                {data.slice(1,7).map(item => (
                        <MusicItem key={item.id} item={item} />
                    ))}
            </article>
        </section>
    </div>
)
};

export default Home;
