import React from 'react';
import logo from '../images/logo.png'

function Navbar () {
    
    return (
        <div className='bg-gray-50c h-10 flex justify-between items-center p-1'>
            <h1>Project Menager</h1>
            <img src={logo} className='w-7 h-8 pt-1 mr-3 inline-block' />
        </div>
    )
};

export default Navbar