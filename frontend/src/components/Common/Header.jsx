import React from 'react'
import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='border-b border-gray-300'>
      {/* TopBar */}
      <Topbar />
      {/* Navbar */}
      <Navbar />
    </div>
  )
}

export default Header
