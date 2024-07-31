import { useRef, useState, useEffect } from 'react';
// "@splinetool/runtime": "^0.9.145",


import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'



const Breath = () => {
    const spline = useRef();
    const [inCount, setInCount] = useState(0);
    const [exCount, setExCount] = useState(0);
    const [numCount, setNumCount] = useState(3);
    const [isCountingIn, setIsCountingIn] = useState(false);
    const [isCountingEx, setIsCountingEx] = useState(false);
    
    let intervalIdIn, intervalIdEx;

    // Function to start inhalation countdown
    const startInhalationCountdown = () => {
        if (!isCountingIn && !isCountingEx) {
            setIsCountingIn(true);
            let currentInCount = 0;

            intervalIdIn = setInterval(() => {
                currentInCount += 1;
                setInCount(currentInCount);

                if (currentInCount === 5) {
                    clearInterval(intervalIdIn);
                    setIsCountingIn(false);
                }
            }, 1000);
        }
    };

    
    const exCountFuntion = () =>{
        if(inCount===5 && !isCountingEx ){
            setInCount(0); // Example: inhalation countdown starts from 5
            setIsCountingEx(true);
            let currentExCount = 0;

            intervalIdEx = setInterval(() => {
                currentExCount += 1;
                setExCount(currentExCount);

                if (currentExCount === 3) {
                    clearInterval(intervalIdEx);
                    setIsCountingEx(false);
                }
            }, 1000);
        }
    }

    const numCountFuntion = () => {
        if(inCount===0 && exCount === 3){
            setExCount(0)
            setNumCount(numCount-1)
            // let currentNumCount = 3;
            startInhalationCountdown()
                // currentNumCount += 1;
                // setExCount(currentNumCount);

                if (numCount <= 1) {
                    stopAllCountdowns()
                }
        }
    }


    useEffect(()=>{
        exCountFuntion()
    },[isCountingIn])

    useEffect(()=>{
        numCountFuntion()
    },[isCountingEx])

    const stopAllCountdowns = () => {
        clearInterval(intervalIdIn);
        clearInterval(intervalIdEx);
        setIsCountingIn(false);
        setIsCountingEx(false);
        setInCount(0);
        setExCount(0);
        setNumCount(3); // Reset numCount to its initial state
    };


    function onLoad(splineApp) {
      // save the app in a ref for later use
      spline.current = splineApp;
    }
  
    function triggerAnimation(e) {
        console.log(e.target.classList.contains("start"));
        if(e.target.classList.contains("start")){
            spline.current.emitEvent('mouseUp', 'Sphere');
            startInhalationCountdown()
        }else{
            spline.current.emitEvent('mouseDown', 'Sphere');
            stopAllCountdowns()
        }
    }
    return(
        <div className='flex flex-col justify-between items-center w-full md:h-lvh p-12 bg-footer'>
            <section className='w-full'>
                <h1 className='font-bold text-2xl font-head '><FontAwesomeIcon icon={faWind} /> Breathe</h1>
            </section>

            <section className='flex flex-col items-start gap-y-10 w-full md:h-3/4  lg:w-8/12'>
                <article className='flex flex-col md:flex-row justify-between gap-y-6 w-full gap-x-4'>
                    <div className='w-full h-96 lg:w-2/3 rounded-3xl overflow-hidden drop-shadow-3xl'>
                        <Spline 
                            scene="https://prod.spline.design/RT5xPiwUBSDqBY0K/scene.splinecode" 
                            onLoad={onLoad}
                            />
                    </div>
                    <div className='relative flex md:flex-col justify-around md:justify-center rounded-3xl overflow-hidden bg-white bg-opacity-30 gap-y-16 w-full md:w-1/3 lg:w-1/4 py-4 self-center drop-shadow-3xl border border-white text-center'>
                        <div className='z-10 flex flex-col gap-y-2'>
                            <p className='text-2xl md:text-4xl font-bold'>{numCount}</p>
                            <p className='text-sm md:text-lg'>Count</p>
                        </div>
                        <div className='z-10 flex flex-col gap-y-2'>
                            <p className='text-2xl md:text-4xl font-bold text-blue'>{inCount}s</p>
                            <p className='text-sm md:text-lg'>Inhale</p>
                        </div>
                        <div className='z-10 flex flex-col gap-y-2'>
                            <p className='text-2xl md:text-4xl font-bold text-darkorange'>{exCount}s</p>
                            <p className='text-sm md:text-lg'>Exhale</p>
                        </div>           
                    </div>
                </article>
                <article className='flex justify-around w-full lg:w-2/3'>
                    <button 
                        type="button" 
                        className='start relative overflow-hidden border border-2 rounded-full px-4 py-1 text-blue md:text-lg font-bold  bg-white bg-opacity-30 backdrop-blur-sm' 
                        onClick={triggerAnimation}
                        disabled={isCountingIn || isCountingEx }
                    >
                        Start
                    </button>
                    <button 
                        type="button"
                        className='relative overflow-hidden border border-2 rounded-full px-4 py-1 text-darkorange md:text-lg font-bold bg-white bg-opacity-30 backdrop-blur-sm' 
                        onClick={triggerAnimation}
                    >
                        Stop
                    </button>
                </article>
            </section>         
        </div>

    )
}

export default Breath