import React from 'react'
import MyOrderPage from './MyOrderPage'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col'>
    <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
         {/* Left Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-2xl rounded-lg p-6">
           <h1 className="text-2xl md:3xl font-bold mb-4">John Doe</h1>
           <p className="text-lg text-gray mb-4">johndoe@example.com</p>
           <button className="w-full bg-red-500 text-white py-2 px-3 rounded cursor-pointer hover:bg-red-600">
             <Link to="/login">Log Out</Link>
           </button>
          </div>

          {/* Right */}
          <div className="w-full md:w-2/3 lg:w-3/4">
           <MyOrderPage />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Profile
