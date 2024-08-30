import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {

  return (
    <>
    <nav className='py-1 pr-3 px-2 flex items-center justify-between bg-orange-800'>
        <div>
        <Link href={'/'}><Image src="/Logo.png" width={100} height={100}/></Link>
        </div>
        <ul className='flex gap-4 cursor-pointer'>
            <Link href={'/news'}><li className=' text-white hover:font-bold text-lg'>News</li></Link>
            <Link href={'/schemes'}><li className='text-white hover:font-bold text-lg'>Schemes</li></Link>
            <li className='text-white hover:font-bold text-lg'>MSP</li>
            <li className='text-white hover:font-bold text-lg'>Crop-Recommendation</li>
            <li className='text-white hover:font-bold text-lg'>Contact Us</li>
            <li className='text-white hover:font-bold text-lg'>About Us</li>
        </ul>
        <div className='flex gap-5'>
        <button className='bg-gray-100 px-3 py-1 text-lg rounded-3xl'>Login</button>
        <button className='bg-gray-100 px-3 py-1 text-lg rounded-3xl'>SignUp</button>
        </div>
    </nav>
    </>
  )
}


export default Navbar
