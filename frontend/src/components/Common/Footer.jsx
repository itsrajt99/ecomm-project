import React from 'react'
import { Link } from 'react-router-dom'
import { FaMeta } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='border-t py-12'>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>
        <div>
           <h3 className='text-lg text-gray-800 mb-4'>News Letter</h3>
      <p className='text-gray-700 mb-4'>Be the first to here about our new products,exclusive event, and online offer</p>
      <p className='font-md text-sm text-gray-600 mb-6'>SignUp and get 10% off on your first order</p>

      <form className='flex'>
       <input type="email" placeholder='Enter your email' className='p-3 w-full text-sm border-t border-l border-b
       border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all' />

       <button className='bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all' type='submit'>Subscribe</button>
      </form>
    </div>

    {/* Right side */}
    <div>
        <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
        <ul className='space-y-2 text-gray-600'>
           <li>
            <Link to="#" className="hover:text-gray-600 transition-color">Men's Top wear</Link>
           </li>
           <li>
            <Link to="#" className="hover:text-gray-600 transition-color">Women's Top wear</Link>
           </li>
           <li>
            <Link to="#" className="hover:text-gray-600 transition-color">Men's Bottom wear</Link>
           </li>
           <li>
            <Link to="#" className="hover:text-gray-600 transition-color">Women's Bottom wear</Link>
           </li>
        </ul>
    </div>

    {/* support links */}
    <div>
        <h3 className='text-lg text-gray-800 mb-4'>Support</h3>
        <ul className='space-y-2 text-gray-600'>
           <li>
            <Link to="#" className="hover:text-gray-600 transition-color">Contact Us</Link>
           </li>
           <li>
            <Link to="#" className="hover:text-gray-600 transition-color">About Us</Link>
           </li>
           <li>
            <Link to="#" className="hover:text-gray-600 transition-color">FAQs</Link>
           </li>
           <li>
            <Link to="#" className="hover:text-gray-600 transition-color">Features</Link>
           </li>
        </ul>
    </div>

    {/* Follow us  */}
    <div>
        <h3 className='text-lg text-gray-800 mb-4'>Follow Us</h3>
        <div className='flex items-center space-x-4 mb-6'>
           <a href="https://www.faceboook.com" target='_blank' rel='noopener noreferre' className='
           hover:text-gray-500
           '> <FaMeta className='h-5 w-5' /></a>
            <a href="https://www.instagram.com" target='_blank' rel='noopener noreferre' className='
           hover:text-gray-500
           '> <FaInstagram className='h-5 w-5' /></a>
            <a href="https://www.twitter.com" target='_blank' rel='noopener noreferre' className='
           hover:text-gray-500
           '> <FaTwitter  className='h-5 w-5' /></a>
        </div>
        <p className='text-gray-800 text-xl'>Call Us</p>
        <p className=''><CiHeadphones  className='h-6 w-6 inline-block'/>0123-456-789</p>
    </div>
    </div>

    <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-300 pt-6'>
       <p className='text-gray-500 text-sm tracking-tight text-center'> @2025, CompileTab, All Right Reserved</p>
    </div>
    </footer>
  )
}

export default Footer
