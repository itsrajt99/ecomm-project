import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PayPalButton from './PayPalButton'

const CheckOut = () => {

    const [checkoutId,setCheckoutId] = useState(null)

    const handlePaymentSucess = (details)=>{
        console.log("Payment Sucessfull",details);
        navigate("/order-confirmation")
    }

    const handleCreateCheckout = (e)=>{
      e.preventDefault();
      setCheckoutId(123);
    }

    const cart ={
        products : [
            {
                name:"Stylish jacket",
                size:"M",
                color:"Black",
                price:120,
                image:"https://picsum.photos/150?random=1"
            },
            {
                name:"Stylish jacket",
                size:"46",
                color:"Black",
                price:75,
                image:"https://picsum.photos/150?random=2"
            },
        ],
        totalPrice :195,
    }

    const navigate = useNavigate()
    const [shippingAddress,setShippingAddress] = useState({
        firstName:"",
        lastName:"",
        address:"",
        city:"",
        postalCode:"",
        country:"",
        phone:"",
    })
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auyto py-10 px-6 tracking-tight'>
      {/* left */}
      <div className="bg-white rounded-lg p-6 ">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
            <h3 className="text-lg mb-4 ">
                Contact Details
            </h3>
            <div className="mb-4">
                <label className='block text-gray-700'>Email</label>
                <input type="email"value="user@example.com" className='w-full p-2 border rounded' disabled/>
            </div>
            <h3 className="text-lg mb-4">Delivery</h3>
            <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">First Name</label>
                    <input 
                    type="text"
                    className='w-full p-2 border rounded' 
                    required 
                    value={shippingAddress.firstName} 
                    onChange={(e)=>setShippingAddress({...shippingAddress, firstName: e.target.value})}/>
                </div>
                <div>
                    <label className="block text-gray-700">Last Name</label>
                    <input 
                    type="text"
                    className='w-full p-2 border rounded' 
                    required 
                    value={shippingAddress.lastName} 
                    onChange={(e)=>setShippingAddress({...shippingAddress, lastName: e.target.value})}/>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input
                 type="text"
                 value={shippingAddress.address}
                 onChange={(e)=>setShippingAddress({...shippingAddress, address:e.target.value})}
                 className='w-full p-2 border rounded'
                 required />
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-gray-700">City</label>
                    <input 
                    type="text"
                    className='w-full p-2 border rounded' 
                    required 
                    value={shippingAddress.city} 
                    onChange={(e)=>setShippingAddress({...shippingAddress, city: e.target.value})}/>
                </div>
                 <div>
                    <label className="block text-gray-700">Postal Code</label>
                    <input 
                    type="text"
                    className='w-full p-2 border rounded' 
                    required 
                    value={shippingAddress.postalCode} 
                    onChange={(e)=>setShippingAddress({...shippingAddress, postalCode: e.target.value})}/>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Country</label>
                <input
                 type="text"
                 value={shippingAddress.country}
                 onChange={(e)=>setShippingAddress({...shippingAddress, country:e.target.value})}
                 className='w-full p-2 border rounded'
                 required />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                 type="tel"
                 value={shippingAddress.phone}
                 onChange={(e)=>setShippingAddress({...shippingAddress, phone:e.target.value})}
                 className='w-full p-2 border rounded'
                 required />
            </div>
            <div className="mt-6">
                {!checkoutId ? (
                    <button type='submit' className='w-full cursor-pointer bg-black text-white py-3 rounded'>Continue to Payment </button>
                ): (
                    <div>
                        <h3 className="text-lg mb-4">Pay With PayPal</h3>
                        {/* paypal comp*/}
                        <PayPalButton amount={"195.00"} onSuccess={handlePaymentSucess}
                         onError={(err)=>alert("Payment failed. Try again")} />
                    </div>
                )}
            </div>
        </form>
      </div>

      {/* Right */}
      <div className="bg-gray-200 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summmary</h3>
        <div className="border-t py-4 mb-4 ">
            {cart.products.map((product, index) => (
                <div key={index} className='flex items-start justify-between py-2 border-b'>
                    <div className="flex items-start">
                        <img src={product.image} alt="" className='w-20 h-24 object-cover mr-4' />
                        <div>
                            <h3 className="text-md">{product.name}</h3>
                            <p className="text-gray-500">Size : {product.size}</p>
                             <p className="text-gray-500">Color : {product.color}</p>
                              
                        </div>
                    </div>
                    <p className="text-xl">${product.price?.toLocaleString()}</p>
                </div>
            ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
            <p className='text-md font-medium text-black'>Subtotal</p>
            <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
            <p className='text-md font-medium text-black'>Shipping</p>
            <p className="">Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mb-4 border-t pt-4">
            <p className='text-md font-medium text-black'>Total</p>
            <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="w-full bg-black text-center text-md mt-52 rounded text-white">
            <Link to="/order-confirmation">
            <button className='h-12 text-center cursor-pointer'>My Orders</button>
            </Link>
        </div>
      </div>

      
    </div>
  )
}

export default CheckOut
