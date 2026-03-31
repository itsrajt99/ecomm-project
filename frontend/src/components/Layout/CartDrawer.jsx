import React, {} from 'react'
import { IoClose } from "react-icons/io5";
import CartContent from '../Cart/CartContent';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {

  const navigate = useNavigate()

  const handleCheckOut = ()=>{
    toggleCartDrawer();
   navigate("/checkout")
  }

  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-2xl transform
    transition-transform duration-300 flex flex-col z-50 ${drawerOpen ?"translate-x-0" : "translate-x-full"}`}>
       <div className='flex justify-end p-4'>
         <button onClick={toggleCartDrawer}>
            <IoClose className='h-6 w-6 text-gray-600 cursor-pointer' />
         </button>
       </div>
       {/* cart content */}
       <div className='flex-grow p-3 overflow-y-auto '>
          <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
         
         {/* component for card */}
         <CartContent />
       </div>

       {/* checkout button */}
       <div className='p-4 bg-white sticky bottom-0'>
          <button onClick={handleCheckOut} className='w-full bg-black text-white py-3 rounded-lg font-semibold
           hover:bg-gray-800 cursor-pointer transition'>Checkout</button>
          <p className='text-center font-sm font-semibold mt-3 tracking-tighter text-gray-500'>Shipping Taxes and discount code calculate at checkout</p>
       </div>
    </div>
  )
}

export default CartDrawer
