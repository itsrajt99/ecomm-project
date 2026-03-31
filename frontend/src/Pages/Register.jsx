import React, { useState } from 'react'
import register from "../assets/register.webp";
import { Link } from 'react-router-dom';

const Register = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  const [fullName,setFullName] = useState("")

  const handleSubmit =(e)=>{
    e.preventDefault();
  }

  return (
    <div className='flex'>
        {/* Left side */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
         <form onSubmit={handleSubmit} className='w-full m-w-md bg-white/90 p-8 rounded-lg border border-gray-400 shadow-4xl'>
           <div className='flex justify-center mb-6'>
              <h2 className='text-xl font-medium text-red-600'> 
               Rabbit
              </h2>
           </div>
           <h2 className='text-2xl font-bold text-center mb-6'>Hey there...</h2>
           <p className='text-center mb-6'>Register Here To Complete Sign Up</p>
            <div className='mb-4'>
              <label className='block text-xl mb-2 text-red-600'>Full Name</label>
              <input type="text" placeholder='Enter your full name'value={fullName}
               onChange={(e)=>setFullName(e.target.value)}
                className='w-full border outline-none border-gray-300 rounded p-2' />
           </div>
           <div className='mb-4'>
              <label className='block text-xl mb-2 text-red-600'>Email</label>
              <input type="email" placeholder='Enter your email'value={email}
               onChange={(e)=>setEmail(e.target.value)}
                className='w-full border outline-none border-gray-300 rounded p-2' />
           </div>
           <div className="mb-4">
            <label className='block text-xl text-red-600 mb-2'>Password</label>
            <input type="password" placeholder='Enter your password' value={password} 
            onChange={(e)=>setPassword(e.target.value)} className='w-full p-2 border border-gray-300 outline-none rounded' />
           </div>
           <button className='w-full bg-red-500 text-white p-3 rounded-lg  mt-3 cursor-pointer
            hover:bg-red-600' type='submit'>Sign Up</button>
            <p className="mt-6 text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className='text-red-900'>Sign In</Link>
            </p>
         </form>
      </div>

      {/* Right side */}
      <div className="hidden md:block w-1/2 bg-white">
       <div className='h-full flex flex-col justify-center items-center'>
          <img src={register} alt="" className='h-[750px] w-full object-cover '/>
       </div>
      </div>
    </div>
  )
}

export default Register
