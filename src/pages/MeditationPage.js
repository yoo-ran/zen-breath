import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight, faFan } from '@fortawesome/free-solid-svg-icons'

const Meditation = () => {


    const activate = (e) => {
        const slider = document.querySelector(".slider");
        const items = document.querySelectorAll("#item"); // Changed ID to class for uniqueness
        console.log(slider);
        if (e.currentTarget.classList.contains("next")) {
            slider.append(items[0]);
        } else if (e.currentTarget.classList.contains("prev")) {
            slider.prepend(items[items.length - 1]);
        }
    };
    return(
        <div>
            <section className='absolute z-10 p-10'>
                <h1 className='text-white font-bold text-xl'><FontAwesomeIcon icon={faFan} /> Daily Meditation</h1>
            </section>
            <section className='relative w-full h-lvh overflow-hidden'>
                <ul className='slider'>
                    <li 
                        id='item'
                        className='z-30 absolute top-60 w-52 h-72 -translate-y-1/2 bg-cover rounded-3xl drop-shadow-3xl transition-all' 
                        style={{ backgroundImage: `url(${require('../assets/zenbreath/1.jpeg')})` }}>
                    <div className='content'>
                        <h2 className='title font-bold text-2xl'>"Down the River"</h2>
                        <p className='description'> Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                        praesentium nisi. Id laboriosam ipsam enim. </p>
                        <button>Read More</button>
                    </div>
                    </li>
                    <li 
                        id='item'
                        className='z-20 absolute top-60 w-52 h-72 -translate-y-1/2 bg-cover rounded-3xl  drop-shadow-3xl transition-all' 
                        style={{ backgroundImage: `url(${require('../assets/zenbreath/2.jpeg')})` }}>
                    <div className='content'>
                        <h2 className='title font-bold text-2xl'>"Estrange Bond"</h2>
                        <p className='description'> Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                        praesentium nisi. Id laboriosam ipsam enim. </p>
                        <button>Read More</button>
                    </div>
                    </li>
                    <li 
                        id='item'
                        className='z-10 absolute top-60 w-52 h-72 -translate-y-1/2 bg-cover rounded-3xl drop-shadow-3xl transition-all' 
                        style={{ backgroundImage: `url(${require('../assets/zenbreath/3.jpeg')})` }}>
                        <div className='content'>
                            <h2 className='title font-bold text-2xl'>"The Gate Keeper"</h2>
                            <p className='description'> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                            praesentium nisi. Id laboriosam ipsam enim. </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li 
                        id='item'
                        className='z-10 absolute top-60 w-52 h-72 -translate-y-1/2 bg-cover rounded-3xl drop-shadow-3xl transition-all' 
                        style={{ backgroundImage: `url(${require('../assets/zenbreath/4.jpeg')})` }}>
                        <div className='content'>
                            <h2 className='title font-bold text-2xl'>"The Gate Keeper"</h2>
                            <p className='description'> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                            praesentium nisi. Id laboriosam ipsam enim. </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li 
                        id='item'
                        className='z-10 absolute top-60 w-52 h-72 -translate-y-1/2 bg-cover rounded-3xl drop-shadow-3xl transition-all' 
                        style={{ backgroundImage: `url(${require('../assets/zenbreath/5.jpeg')})` }}>
                        <div className='content'>
                            <h2 className='title font-bold text-2xl'>"The Gate Keeper"</h2>
                            <p className='description'> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                            praesentium nisi. Id laboriosam ipsam enim. </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li 
                        id='item'
                        className='z-10 absolute top-60 w-52 h-72 -translate-y-1/2 bg-cover rounded-3xl drop-shadow-3xl transition-all' 
                        style={{ backgroundImage: `url(${require('../assets/zenbreath/6.jpeg')})` }}>
                        <div className='content'>
                            <h2 className='title font-bold text-2xl'>"The Gate Keeper"</h2>
                            <p className='description'> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                            praesentium nisi. Id laboriosam ipsam enim. </p>
                            <button>Read More</button>
                        </div>
                    </li>
                </ul>
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