import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClover } from '@fortawesome/free-solid-svg-icons'

import {getAllData} from "../data/contents"
import MusicItem from '../components/MusicItem';
import Calendar from '../components/Calendar/Calendar';

const Profile = () => {
    let data = getAllData()
    return(
        <div className='flex flex-col  gap-y-24 md:px-12 md:pt-12'>
            <section className='flex justify-between'>
                <h1 className='font-bold text-xl'><FontAwesomeIcon icon={faClover} /> Profile</h1>
                <p>filter</p>
            </section>

            <section className='flex justify-between' >
                <article className='w-8/12'>
                    <div className='flex justify-between pb-8 drop-shadow-text'>
                        <h3 className='uppercase'>calendal</h3>
                        <p>+ Add Sessions</p>
                    </div>
                    <div className='flex justify-center items-center bg-blue bg-opacity-30 rounded-3xl lg:p-10'>
                        <Calendar/>
                    </div>
                </article>
                <article className='w-3/12 flex flex-col gap-y-10'>
                    <div>
                        <h3 className='drop-shadow-text text-xl pb-4'>More music You’ll Love</h3>

                        <div
                            style={{ backgroundImage: `url(${require('../assets/zenbreath/2.jpeg')})` }}
                            className='relative overflow-hidden flex flex-col justify-between bg-cover  text-white rounded-2xl p-4 w-72 h-72 lg:w-full lg:h-64'>
                            <div className='absolute top-0 left-0 bg-black h-full w-full opacity-20 z-0'></div>
                            <div className='flex justify-end gap-x-2 z-10'>
                                <p className='relative rounded-full overflow-hidden w-1/ lg:w-1/3 lg:py-1 text-center border text-xs lg:text-same'>Calmness<p className='bg-white border backdrop-blur-3xl opacity-30 h-full w-full absolute top-0'></p></p>
                                <p className='relative rounded-full overflow-hidden w-1/ lg:w-1/3 lg:py-1 text-center border text-xs lg:text-same'>Energy<p className='bg-white border backdrop-blur-3xl opacity-30 h-full w-full absolute top-0'></p></p>
                            </div>
                            <div className='z-10 text-center flex flex-col justify-center h-full'>
                                <p className='font-bold font-head text-3xl drop-shadow-text lg:text-2xl'>Focus : Flow</p>
                                <p className='drop-shadow-text pt-2 lg:text-lg'>Serenity Streams</p>
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