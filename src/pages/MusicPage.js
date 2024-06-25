import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic,faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const Music = () => {
    return(
        <div className='flex justify-between p-12 h-lvh'>
            {/* Left */}
            <section className='flex-1 flex flex-col gap-y-16 w-1/2'>
                <h1 className='font-bold text-2xl font-head'><FontAwesomeIcon icon={faMusic} /> Music</h1>
                <div className='flex-1 flex flex-col gap-y-16'>
                    <article className='flex flex-col justify-between gap-y-4'>
                        <h3 className='drop-shadow-3xl'>SPECIAL FOR YOU</h3>
                        <div
                            style={{ backgroundImage: `url(${require('../assets/zenbreath/2.jpeg')})` }}
                            className='relative overflow-hidden flex flex-col justify-between bg-cover  text-white rounded-2xl p-4 w-72 h-72'>
                            <div className='absolute top-0 left-0 bg-black h-full w-full opacity-20 z-0'></div>
                            <div className='flex justify-end gap-x-2 z-10'>
                                <p className='relative rounded-full overflow-hidden w-1/3 text-center border text-xs'>Calmness<p className='bg-white border backdrop-blur-3xl opacity-30 h-full w-full absolute top-0'></p></p>
                                <p className='relative rounded-full overflow-hidden w-1/3 text-center border text-xs'>Energy<p className='bg-white border backdrop-blur-3xl opacity-30 h-full w-full absolute top-0'></p></p>
                            </div>
                            <div className='z-10 text-center'>
                                <p className='font-bold font-head text-3xl drop-shadow-3xl'>Focus : Flow</p>
                                <p className='drop-shadow-3xl'>Serenity Streams</p>
                            </div>
                            <div className='z-10'>
                                <div className='relative rounded-full overflow-hidden w-1/3 border border-white text-center text-sm'>
                                    <p className='text-black'>15 min <FontAwesomeIcon icon={faCirclePlay} className='text-white' /></p>
                                    <p className='-z-10 absolute top-0 bg-white border backdrop-blur-xl opacity-40 h-full w-full '></p>
                                </div>
                            </div>
                        </div>

                    </article >
                    <article className='flex flex-col justify-between gap-y-4'>
                        <h3 className='drop-shadow-3xl'>MUSIC BUNDLES FOR YOU</h3>
                        <div>
                            <div
                                style={{ backgroundImage: `url(${require('../assets/zenbreath/2.jpeg')})` }}
                                className='w-1/2 h-52 rounded-3xl bg-cover'
                            ></div>
                        </div>
                    </article>
                </div>
            </section>
            <section className='flex flex-col gap-y-20 w-1/2'>
                <article className='flex-1 flex flex-col justify-between gap-y-4'>
                    <h3 className='drop-shadow-3xl'>MORE MUSIC YOU'LL LOVE</h3>
                    <div className='flex-1 border border-black  overflow-hidden rounded-t-3xl text-white'>
                        <div 
                            style={{ backgroundImage: `url(${require('../assets/zenbreath/1.jpeg')})` }}
                            className='bg-cover h-1/6 flex flex-col justify-center items-start gap-y-2 pl-10'>
                            <p className='text-sm'>Breathing Exercise</p>
                            <p className='font-bold'>Take a Deep Breath</p>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Music