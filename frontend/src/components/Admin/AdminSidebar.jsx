import React from 'react'
import { FaArrowAltCircleLeft, FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const AdminSidebar = () => {
    const navigate = useNavigate()

    const handleLogOut = ()=>{
      navigate("/")
    }

  return (
    <div className='p-6'>
      <div className="mb-6">
        <Link to="/admin"  className='text-2xl font-medium'>Rabbit</Link>
      </div>
      <h2 className="text-xl font-medium mb-6 text-center bg-gray-600 rounded">Admin Dashboard</h2>

      <nav className="flex flex-col space-y-2">
        <NavLink to="/admin/users" className={({isActive})=> isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"}>
          <FaUser/>
          <span>Users</span>
        </NavLink>
          <NavLink to="/admin/products" className={({isActive})=> isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"}>
          <FaBoxOpen/>
          <span>Products</span>
        </NavLink>
          <NavLink to="/admin/orders" className={({isActive})=> isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"}>
          <FaClipboardList/>
          <span>Orders</span>
        </NavLink>
          <NavLink to="/" className={({isActive})=> isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"}>
          <FaStore/>
          <span>Shop</span>
        </NavLink>
         <div className="mt-8">
            <button className='flex items-center justify-center gap-2 p-3 
            cursor-pointer hover:bg-red-900  rounded bg-red-600 text-white w-full' onClick={handleLogOut}>LogOut
                <FaSignOutAlt/>
            </button>
         </div>
      </nav>
    </div>
  )
}

export default AdminSidebar
