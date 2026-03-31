import React, { useEffect, useRef, useState } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const NewArrival = () => {

    const scrollRef = useRef(null);
    // const [isDragging, setIsDragging] = useState(false)
    // const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    
    const newArrival = [
        {
            _id:1,
            name:"Stylish Jacket",
            price:120,
            images:[
                {
                    url:"https://picsum.photos/500/500?/random=1",
                    altText: "Stylish Jacket",

                },
            ]
        },
        {
            _id:2,
            name:"Stylish Jacket",
            price:120,
            images:[
                {
                    url:"https://picsum.photos/500/500?/random=2",
                    altText: "Stylish Jacket",

                },
            ]
        },
        {
            _id:3,
            name:"Stylish Jacket",
            price:120,
            images:[
                {
                    url:"https://picsum.photos/500/500?/random=3",
                    altText: "Stylish Jacket",

                },
            ]
        },
        {
            _id:4,
            name:"Stylish Jacket",
            price:120,
            images:[
                {
                    url:"https://picsum.photos/500/500?/random=4",
                    altText: "Stylish Jacket",

                },
            ]
        },
        {
            _id:5,
            name:"Stylish Jacket",
            price:120,
            images:[
                {
                    url:"https://picsum.photos/500/500?/random=5",
                    altText: "Stylish Jacket",

                },
            ]
        },
        {
            _id:6,
            name:"Stylish Jacket",
            price:120,
            images:[
                {
                    url:"https://picsum.photos/500/500?/random=6",
                    altText: "Stylish Jacket",

                },
            ]
        },
        {
            _id:7,
            name:"Stylish Jacket",
            price:120,
            images:[
                {
                    url:"https://picsum.photos/500/500?/random=7",
                    altText: "Stylish Jacket",

                },
            ]
        },
        {
            _id:8,
            name:"Stylish Jacket",
            price:120,
            images:[
                {
                    url:"https://picsum.photos/500/500?/random=8",
                    altText: "Stylish Jacket",

                },
            ]
        },
    ]

    const scroll = (direction) =>{
        const scrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current.scrollBy({left:scrollAmount, behavior: "smooth"})
    }    
    
    const updateScrollButtons = ()=>{
        const container = scrollRef.current;
        if(container){
         const leftScroll = container.scrollLeft;
         const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth
         setCanScrollLeft(true)
         setCanScrollRight(rightScrollable)
        }

        console.log({
            scrollLeft: container.scrollLeft,
            clientWidth: container.clientWidth,
            containerScrollWidth: container.scrollWidth,
        })
    }

    useEffect(()=>{
        const container = scrollRef.current;
        if(container){
            container.addEventListener("scroll", updateScrollButtons)
            updateScrollButtons();
        }
    },[])
  return (
    <section className='py-16 px-4 lg:px-0'>
        <div className='container mx-auto text-center mb-10 relative '>
           <h2 className='text-3xl mb-4 font-bold'>Explore New Arrivals</h2>
           <p className='text-lg text-gray-600 mb-8'>
            Discover the latest style straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion
           </p>

           {/* Scroll button */}
           <div onClick={()=> scroll("left")} disabled={!canScrollLeft} className='absolute right-0 bottom-[-30px] flex space-x-2'>
            <button className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black":"bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
                <FaAngleLeft className='text-xl cursor-pointer' />
            </button>
            {/* <button onClick={()=>scroll("right")} className='p-2 rounded border bg-white text-black'>
                <FaAngleRight className='text-xl cursor-pointer'/>  
            </button> */}
           </div>
        </div>

        {/* content scrollable */}


        <div ref={scrollRef} className="container mx-auto overflow-x-scroll hide-scrollbar flex space-x-6 relative">
           {newArrival.map((product)=>(
             <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
                <img src={product.images[0]?.url} alt={product.images[0]?.altText} className='w-full h-[500px] object-cover
                rounded-lg' />

                <div className='absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white 
                p-4 rounded-b-lg'>
                 <Link to={`/product/${product._id}`} className='block'>
                 <h4 className='font-medium'>
                    {product.name}
                    </h4>
                    <p className='mt-1'>${product.price}</p>
                    </Link>
                </div>
             </div>
           ))}
        </div>
    </section>
  )
}

export default NewArrival
