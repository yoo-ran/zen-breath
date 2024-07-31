import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClover } from '@fortawesome/free-solid-svg-icons'

import {getAllData} from "../data/contents"
import MusicItem from '../components/MusicItem';
import Calendar from '../components/Calendar/Calendar';
import SearchBar from '../components/SearchBar';
import { Component } from 'react';

const Profile = () => {
    let data = getAllData()
    return(
        <div className='flex flex-col  gap-y-24 px-8 pt-8 md:px-12 md:pt-12 '>
            <section className='flex justify-between'>
                <h1 className='font-bold text-xl'><FontAwesomeIcon icon={faClover} /> Profile</h1>
                <div className='w-1/2 lg:w-3/12'>
                    <SearchBar/>
                </div>

            </section>

            <section className='flex flex-col lg:flex-row justify-between gap-y-10' >
                <article className='lg:w-8/12'>
                    <div className='flex justify-between pb-8 drop-shadow-text'>
                        <h3 className='uppercase'>calendal</h3>
                        <p>+ Add Sessions</p>
                    </div>
                    <div className='flex justify-center items-center bg-blue bg-opacity-30 rounded-3xl lg:p-10'>
                        <Calendar/>
                    </div>
                </article>
                <article className='lg:w-3/12 flex flex-col gap-y-10'>
                    <div>
                        <h3 className='drop-shadow-text text-xl pb-4'>More music You’ll Love</h3>

                        <div
                            style={{ backgroundImage: `url(${require('../assets/zenbreath/2.jpeg')})` }}
                            className='relative overflow-hidden flex flex-col justify-between bg-cover  text-white rounded-2xl p-4 md:w-72 aspect-square lg:w-full lg:h-64'>
                            <div className='absolute top-0 left-0 bg-black h-full w-full opacity-20 z-0'></div>
                            <div className='flex justify-end gap-x-2 z-10'>
                                <p className='relative rounded-full overflow-hidden px-2 lg:px-0lg:w-1/3 lg:py-1 text-center border bg-white bg-opacity-30 text-xs lg:text-sm'>Calmness</p>
                                <p className='relative rounded-full overflow-hidden px-2 lg:px-0lg:w-1/3 lg:py-1 text-center border bg-white bg-opacity-30 text-xs lg:text-sm'>Energy</p>
                            </div>
                            <div className='z-10 text-center flex flex-col justify-center h-full'>
                                <p className='font-bold font-head text-xl md:text-3xl drop-shadow-text lg:text-2xl'>Focus : Flow</p>
                                <p className='drop-shadow-text pt-2 text-sm lg:text-base'>Serenity Streams</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3 className='drop-shadow-text text-xl pb-4'>More music You’ll Love</h3>
                            <div className='flex flex-col overflow-hidden drop-shadow w-full rounded-t-large text-white md:h-80  drop-shadow-text'>
                                {data.map(item => (
                                    <MusicItem key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Profile