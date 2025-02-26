import React from 'react'

function Navbar() {
    return (
        <>
            <nav>
                <ul className='h-12 w-full flex gap-10 px-12 items-center justify-end text-[20px] text-yellow-500 font-bold bg-black'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Terms</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar