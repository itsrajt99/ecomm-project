import React, { useState } from 'react'
import { FaBars } from "react-icons/fa"
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">

      {/* Mobile Header */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-30">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-gray-900 w-44 min-h-screen text-white fixed top-0 left-0
        transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 md:translate-x-0 md:relative md:block z-30`}
      >
        <AdminSidebar />
      </div>

      {/* main content */}
      <div className="flex-grow overflow-auto">
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout
