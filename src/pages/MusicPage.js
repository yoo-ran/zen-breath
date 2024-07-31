import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic,faCirclePlay } from '@fortawesome/free-solid-svg-icons'

import {getAllData} from "../data/contents"
import Images from '../components/importImg';

import HomeItem from '../components/HomeItem';
import VideoPlay from '../components/VideoPlay';

const Music = () => {
    let data = getAllData()
    const [vItem, setVItem] = useState({})
    const [openV, setOpenV] = useState(false)
    const [openVChild, setOpenVChild] = useState(false)

    const videoID = (item) => {
        setVItem(item)
        setOpenV(true)
    }

    const openFromChild = (newOpenV) => {
        setOpenV(newOpenV);
    };

    return(
        <div className='relative flex flex-col md:flex-row justify-between gap-y-10 md:gap-x-10 px-12 pt-12'>
            <div className={` ${openV || openVChild ? "":"hidden"}`}>
                <VideoPlay item={vItem} openV={openV} setOpenV={openFromChild}/>
            </div>
            {/* Left */}
            <section className='flex-1 flex flex-col gap-y-16 md:w-2/3'>
                <h1 className='font-bold text-xl md:text-2xl font-head'><FontAwesomeIcon icon={faMusic} /> Music</h1>
                <div className='flex-1 flex flex-col gap-y-16'>

                    <article className='flex flex-col justify-between gap-y-4'>
                        <h3 className='drop-shadow-text md:text-xl'>SPECIAL FOR YOU</h3>
                        <div
                            onClick={()=>videoID(data[2])}
                            style={{ backgroundImage: `url(${require('../assets/zenbreath/2.jpeg')})` }}
                            className='relative overflow-hidden cursor-pointer flex flex-col justify-between bg-cover  text-white rounded-2xl p-4 aspect-square md:w-full lg:w-1/2 transition hover:drop-shadow-text hover:brightness-90'>
                            <div className='absolute top-0 left-0 bg-black h-full w-full opacity-20 z-0'></div>
                            <div className='flex justify-end gap-x-2 z-10'>
                                <p className='relative rounded-full overflow-hidden px-2 bg-white bg-opacity-30 lg:w-1/4 lg:py-1 text-center border text-xs lg:text-base'>Calmness</p>
                                <p className='relative rounded-full overflow-hidden px-2 bg-white bg-opacity-30 lg:w-1/4 lg:py-1 text-center border text-xs lg:text-base'>Energy</p>
                            </div>
                            <div className='z-10 text-center'>
                                <p className='font-bold font-head text-lg md:text-3xl drop-shadow-text lg:text-3xl'>Focus : Flow</p>
                                <p className='drop-shadow-text md:pt-4 text-sm lg:text-lg'>Serenity Streams</p>
                            </div>
                            <div className='z-10'>
                                <div className='relative rounded-full overflow-hidden w-1/2 md:w-1/3 lg:w-1/4 border border-white text-center text-sm lg:text-lg'>
                                    <p className='text-black bg-white bg-opacity-30'>15 min <FontAwesomeIcon icon={faCirclePlay} className='text-white text-xs md:text-base' /></p>
                                </div>
                            </div>
                        </div>
                    </article >

                    <article className='flex flex-col justify-between gap-y-4'>
                        <h3 className='drop-shadow-text md:text-xl'>MUSIC BUNDLES FOR YOU</h3>
                        <div className='flex flex-wrap gap-4'>
                            {data.slice(1,5).map(item => (
                                <div 
                                    key={item.id}
                                    className='cursor-pointer transition hover:drop-shadow-text hover:brightness-90'
                                    onClick={()=>videoID(data[item.id])}
                                >
                                    <HomeItem item={item} />
                                </div>
                            ))}
                        </div>
                    </article>
                </div>
            </section>
            <section className='flex flex-col gap-y-20 md:w-1/3 '>
                <article className='flex-1 flex flex-col justify-between gap-y-4'>
                    <h3 className='drop-shadow-text md:text-xl'>MORE MUSIC YOU'LL LOVE</h3>
                        <div  className='flex-1 overflow-hidden rounded-t-3xl text-white'>
                        {Images.map( (item, id)=>
                                <div
                                    key={id}
                                    style={{ backgroundImage: `url(${item})` }}
                                    className='bg-cover h-1/6 flex flex-col justify-center items-start md:gap-y-2 py-3 pl-10 lg:h-32'>
                                    <p className='text-sm lg:text-base'>Breathing Exercise</p>
                                    <p className='font-bold lg:text-xl'>Take a Deep Breath</p>
                                </div>
                        )}
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Music