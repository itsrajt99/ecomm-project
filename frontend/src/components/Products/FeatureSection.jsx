import React from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { FaCreditCard } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <section className='py-16 px-4 bg-white'>
        <div className="container mx-auto grid grid-cols1 md:grid-cols-3 gap-8 text-center">
         <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
               <MdOutlineShoppingBag className='text-xl h-7 w-7 cursor-pinter' />
            </div>
            <h4 className='tracking-tighter mb-2 font-serif'>
                FREE INTERNATIONAL SHIPPING
            </h4>
            <p className='text-gray-600 text-sm tracking-tighter'>
                On all orders over $100.00
            </p>
         </div>

         <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
               <TbTruckReturn className='text-xl h-7 w-7 cursor-pinter' />
            </div>
            <h4 className='tracking-tighter mb-2 font-serif'>
                45 DAYS RETURN
            </h4>
            <p className='text-gray-600 text-sm tracking-tighter'>
                Money back gaurantee
            </p>
         </div>

         <div className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4">
               <FaCreditCard className='text-xl h-7 w-7 cursor-pinter' />
            </div>
            <h4 className='tracking-tighter mb-2 font-serif'>
                SECURE CHECKOUT
            </h4>
            <p className='text-gray-600 text-sm tracking-tighter'>
                100% secured checkout process
            </p>
         </div>
        </div>
         
    </section>
  )
}

export default FeatureSection
