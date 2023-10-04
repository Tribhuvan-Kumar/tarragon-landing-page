import React, { useState } from 'react';
import NavBar from "./NavBar";
import OrangePage from './OrangePage';
import PineapplePage from './PineapplePage';

const HomePage = () => {

  const [orangePageHome, setOrangePageHome] = useState(true);

  const handleSlide = () => {
    setOrangePageHome(!orangePageHome);
  }

  return (
    <>
      <div className='h-screen' style={orangePageHome ? { backgroundColor: "#fbebd8" } : { backgroundColor: "#e5fec1" }}>
        <NavBar />
        {orangePageHome ? (<OrangePage />) : (<PineapplePage />)}
        <div className='flex justify-center'>
          <button className='relative top-5 left-3 border rounded-full py-2 px-5 border-black' type='submit' onClick={handleSlide}>Click to Slide</button>
        </div>
      </div>
    </>
  )
}

export default HomePage