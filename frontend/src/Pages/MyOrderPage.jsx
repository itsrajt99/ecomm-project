import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MyOrderPage = () => {
    const [orders,setOrders] =useState([]);
    const navigate = useNavigate()

    const handleRowClick = (orderId)=>{
      navigate(`/order/${orderId}`)
    }

    useEffect(()=>{
        setTimeout(()=>{
            const mockOrders =[
                {
                    _id:"12345",
                    createdAt:new  Date(),
                    shippingAddress:{city:"NewYork",country:"USA"},
                    orderItems: [
                        {
                            name:"Product 1",
                            image:"https://picsum.photos/500/500?random=9"
                        },
                    ],
                    totalPrice:100,
                    isPaid:true,
                },
                {
                    _id:"6789",
                    createdAt:new  Date(),
                    shippingAddress:{city:"NewYork",country:"USA"},
                    orderItems: [
                        {
                            name:"Product 2",
                            image:"https://picsum.photos/500/500?random=5"
                        },
                    ],
                    totalPrice:100,
                    isPaid:true,
                },
            ]
             setOrders(mockOrders);
        },1000)

    },[])
  return (
    <div className='max-w-7xl mx-auto p-4sm:p-6'>
       <h2 className="text-xl sm:text-2xl fontbld mb-6">My Orders</h2>
       <div className='relative shadow-2xl sm:rounded-lg overflow-hidden'>
         <table className="min-w-full text-left text-gray-500">
  <thead className="bg-gray-100 text-xs uppercase text-gray-700">
    <tr>
      <th className="py-2 px-4 sm:py-3">Image</th>
      <th className="py-2 px-4 sm:py-3">OrderId</th>
      <th className="py-2 px-4 sm:py-3">Created</th>
      <th className="py-2 px-4 sm:py-3">Shipping address</th>
      <th className="py-2 px-4 sm:py-3">Items</th>
      <th className="py-2 px-4 sm:py-3">Price</th>
      <th className="py-2 px-4 sm:py-3">Status</th>
    </tr>
  </thead>

  <tbody>
    {orders.length > 0 ? (
      orders.map((order) => (
        <tr key={order._id} onClick={()=>handleRowClick(order._id)} className="border-b hover:bg-gray-50 cursor-pointer">
          <td className="py-2 px-2 sm:py-4 sm:px-4">
            <img
              src={order.orderItems[0].image}
              alt=""
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
            />
          </td>

          <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
            #{order._id}
          </td>

          <td className="py-2 px-2 sm:py-4 sm:px-4">
            {new Date(order.createdAt).toLocaleDateString()} <br/>
            {new Date(order.createdAt).toLocaleTimeString()}
          </td>

          <td className="py-2 px-2 sm:py-4 sm:px-4">
            {order.shippingAddress.city}, {order.shippingAddress.country}
          </td>

          <td className="py-2 px-2 sm:py-4 sm:px-4">
            {order.orderItems.length}
          </td>

          <td className="py-2 px-2 sm:py-4 sm:px-4">
            ${order.totalPrice}
          </td>

          <td className="py-2 px-2 sm:py-4 sm:px-4">
            {order.isPaid ? "Paid" : "Pending"}
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
          You have no orders
        </td>
      </tr>
    )}
  </tbody>
</table>


       </div>
    </div>
  )
}

export default MyOrderPage
