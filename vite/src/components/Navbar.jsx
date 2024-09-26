import React from 'react'
import Logo from './Netflix.png';
import{Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 pr-4' >
        <img className='w-[50px]' src={Logo} alt="Netflix Logo"/>

        {/* <a href="/" className='text-red-500 text-lg font-bold'>Home</a> //{instead of a href we use link to as it is faster compared to it */}
        <Link to="/" className='text-red-500 text-lg font-bold'>Home</Link>
        <Link to='/watchlist' className='text-red-500 text-lg font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar