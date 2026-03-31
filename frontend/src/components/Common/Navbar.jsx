import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    
    const [drawerOpen,setDrawerOpen] = useState(false)
    const toggleCartDrawer = ()=>{
        setDrawerOpen(!drawerOpen)
    }

    const [navDrawerOpen, setNavDrawerOpen] = useState(false)
    const toggleNavDrawer = ()=>{
      setNavDrawerOpen(!navDrawerOpen)
    }
  return (
    <>
      <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        <div>
            <Link to="/" className='text-2xl font-medium'>Rabbit</Link>
        </div>
        <div className='hidden md:flex space-x-6'>
          <Link to="/collections/all" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
           Men
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
           Women
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
           TopWear
          </Link>
          <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
           BottomWear
          </Link>
        </div>

        <div className='flex items-center space-x-4'>
          <Link to="/admin" className='bg-red-600 hover:text-gray-400 text-white py-1 text-center rounded px-4'>Admin</Link>
          <Link to="/profile" className='hover:text-black'>
           <CiUser  className='h-6 w-6 text-gray-700'/>
          </Link>
          <button onClick={toggleCartDrawer} className='relative hover:text-black cursor-pointer'>
             <CiShoppingCart className='h-7 w-7 text-gray-700'/>
             <span className='absolute -top-1 bg-[#ea2e0e] rounded-full px-2 py-0.5 text-white text-xs '>
                5
             </span>
          </button>
        <div className='overflow-hidden'>
            <SearchBar />
        </div>
          

          <button onClick={toggleNavDrawer} className='md:hidden'>
             <GiHamburgerMenu className='h-6 w-6 text-gray-600' />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* mobile navigation */}
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-2xl transform
    transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>

      <div className='flex justify-end p-4'>
        <button onClick={toggleNavDrawer}>
           <IoClose className='h-6 w-6 text-gray-600 cursor-pointer' />
        </button>
        
      </div>
      <div className='p-4 '>
          <h2 className='text-2xl font-semibold mb-4 text-center '>Menu</h2>
          <nav className='text-xl font-semibold text-center border-b border-gray-500 shadow-md p-4'>
            <Link to="#" onClick={toggleNavDrawer} className='block p-2 text-gray-700 hover:text-black'>Men</Link>
            <Link to="#" onClick={toggleNavDrawer} className='block p-2 text-gray-700 hover:text-black'>Women</Link>
            <Link to="#" onClick={toggleNavDrawer} className='block p-2 text-gray-700 hover:text-black'>TopWaer</Link>
            <Link to="#" onClick={toggleNavDrawer} className='block p-2 text-gray-700 hover:text-black'>BottomWear</Link>
          </nav>
      </div>

      </div>
    </>
  )
}

export default Navbar
