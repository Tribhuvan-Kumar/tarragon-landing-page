import React from 'react';
import DrinkCan from '../assets/drinkCan.png';
import PineappleHero from '../assets/pineappleHero.png';
import Pineapple1 from '../assets/pineapple1.png';
import Pineapple2 from '../assets/pineapple2.png';
import Pineapple3 from '../assets/pineapple3.png';

const PineapplePage = () => {
    return (
        <>
            <div className='flex flex-row flex-auto justify-center px-10' id='BackgroundForPineapple'>
                <div><img src={DrinkCan} alt=" " /></div>
                <div className='flex justify-center items-center absolute top-64'>
                    <img className='w-72 relative left-3' src={PineappleHero} alt=" " />
                </div>
                <div className='absolute flex flex-col items-center top-32'>
                    <p className='text-xs relative top-2'>enjoy a refreshing drink</p>
                    <p className='text-2xl font-semibold relative top-14'>Tarragon</p>
                    <p className='text-2xl font-semibold relative top-80'>Pineapple</p>
                    <p className='text-xs relative top-80'>Best way to enjoy fruit juice</p>
                </div>
                <div className='absolute flex flex-col items-center'>
                    <img className='w-64 relative left-72' src={Pineapple3} alt=" " />
                    <img className='w-56 relative right-56 bottom-3' src={Pineapple2} alt=" " />
                    <img className='w-36 relative left-64 bottom-36' src={Pineapple1} alt=" " />
                </div>
            </div>
        </>
    )
}

export default PineapplePage