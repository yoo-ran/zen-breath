// src/components/Home.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faHeart } from '@fortawesome/free-solid-svg-icons'


const Home = () => {
    return (
    <div className='flex justify-between border h-lvh md:p-8'>
        <section className='flex flex-col justify-between'>
            <div className='h-1/4'>
                <h1 className={`font-head font-black md:text-2xl`}>Welcome, Elena</h1>
                <p>You have been 114 mindful days.</p>
            </div>
            <div className='h-3/4'>
                <p className='font-bold drop-shadow'>TODAY'S COMPILATION FOR YOU</p>
                <div >
                    <div className={`bg-[url("")] bg-purple rounded-3xl bg-cover bg-center flex flex-col justify-between md:h-52 md:w-8/12 md:p-4`}>
                        <div className='flex justify-end  md:gap-x-2  md:text-sm'>
                            <p className='bg-white md:px-2 md:py-0.5 rounded-full'>Restful</p>
                            <p className='bg-white md:px-2 md:py-0.5 rounded-full'>Calm</p>
                        </div>
                        <div className='text-white flex flex-col items-center drop-shadow'>
                            <p>Title: restful night</p>
                            <p>Category Sensity</p>
                        </div>
                        <div>
                            <p className='text-white'><FontAwesomeIcon icon={faHeart} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='border flex flex-col justify-between items-center md:w-4/12'>
            <article className='bg-purple w-full text-white rounded-3xl text-center drop-shadow md:p-4'>
                <div></div>
                <p className='drop-shadow md:mb-2'>Find your peace in every session</p>
                <button className={`bg-black rounded-full md:py-1.5 md:px-4 md:text-xs`}>Log My Streaks</button>
            </article>
            <article className='bg-orange w-full rounded-3xl text-center drop-shadow md:h-72 md:p-4'>
                <div className='h-full flex flex-col items-center justify-between text-white'>
                    <div>
                        <h3 className='drop-shadow font-head font-bold md:text-xl'>Subscription</h3>
                        <p className='md:text-sm'>Embrace a Refreshed You</p>
                    </div>
                    <div>
                        <p className='line-through'>$12.48</p>
                        <p className='font-bold font-head text-darkorange md:text-3xl'>$4.99</p>
                        <span className='md:text-xs'>per month</span>
                    </div>
                    <div>
                        <button className='bg-black rounded-full md:py-1.5 md:px-4 md:text-xs'>Unlock 60% off</button>
                    </div>
                </div>
            </article>
            <article className='flex flex-col overflow-hidden drop-shadow w-full rounded-3xl text-white md:h-72'>
                <div className={`bg-orange flex justify-between items-center md:p-4`}>
                    <div>
                        <span className='md:text-sm'>Breathing Exercise</span>
                        <p className='font-bold'>Take a Deep Breath</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCirclePlay} className='md:text-2xl opacity-80'/>
                    </div>
                </div>
            </article>
        </section>
    </div>
)
};

export default Home;
