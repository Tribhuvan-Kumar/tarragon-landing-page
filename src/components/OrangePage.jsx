import React from 'react';
import DrinkCan from '../assets/drinkCan.png';
import OrangeHero from '../assets/orangeHero.png';
import Orange1 from '../assets/orange1.png';
import Orange2 from '../assets/orange2.png';
import Orange3 from '../assets/orange3.png';

const OrangePage = () => {
    return (
        <>
            <div className='flex flex-row flex-auto justify-center px-10' id='BackgroundForOrange'>
                <div><img src={DrinkCan} alt=" " /></div>
                <div className='flex justify-center items-center absolute top-64'>
                    <img className='w-72 relative left-3' src={OrangeHero} alt=" " />
                </div>
                <div className='absolute flex flex-col items-center top-32'>
                    <p className='text-xs relative top-2'>enjoy a refreshing drink</p>
                    <p className='text-2xl font-semibold relative top-14'>Tarragon</p>
                    <p className='text-2xl font-semibold relative top-80'>Orange</p>
                    <p className='text-xs relative top-80'>Best way to enjoy fruit juice</p>
                </div>
                <div className='absolute flex flex-col items-center'>
                    <img className='w-36 relative right-80' src={Orange1} alt=" " />
                    <img className='w-56 relative left-80 bottom-10' src={Orange3} alt=" " />
                    <img className='w-64 relative right-64 bottom-20' src={Orange2} alt=" " />
                </div>
            </div>
        </>
    )
}

export default OrangePage