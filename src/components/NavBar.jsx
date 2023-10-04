import React from 'react';

const NavBar = () => {
  return (
    <nav className='flex flex-row flex-auto justify-between px-10 py-5 to-transparent'>
        <ul>
            <li className='text-xl font-semibold cursor-pointer'>Tarragon</li>
        </ul>
        <ul className='flex flex-row py-1 w-80 justify-between'>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Insights</li>
        </ul>
        <ul className='flex flex-row'>
            <li className='text-xl'><i className="fa-solid fa-magnifying-glass cursor-pointer"></i></li>
            <li className='text-xl ps-5'><i className="fa-solid fa-bars cursor-pointer"></i></li>
        </ul>
    </nav>
  )
}

export default NavBar