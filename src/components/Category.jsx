import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import categories from '../data/category.json'

const Category = () => {
  const[slide,setSlide]=useState(0);

  const prevSlide=()=>{
    if (categories.length-8==slide) return false;
     setSlide(slide+3);

  }
  const nextSlide=()=>{
    if(categories.length==0) return false;
    setSlide(slide-3);
    
  }
  
 


  return ( 
   <div className='max-w-[1250px] mx-auto overflow-hidden mt-2'>
     <div className=' flex items-center justify-between'>
        <h1 className='font-bold text-2xl'>What's on your mind?</h1>
      <div className='flex gap-x-2'>
        <button className='p-3 bg-slate-300 rounded-full' onClick={nextSlide}><FaArrowLeft /></button>
        <button className='p-3 bg-slate-300 rounded-full'onClick={prevSlide}><FaArrowRight />
        </button>
      </div>
    </div>
      <div className='flex '>
       {
         categories.map((category,index)=>{
          
          return(
            <div  style={{transform:`translateX(-${slide*100}%)`}} className=' w-[155px] shrink-0 duration-500'key={index} >
             <img src={process.env.PUBLIC_URL + "/images/" + category.image} alt="" />
             
          </div>
          )
         })
       }
      </div>
      <hr className='my-8 border-[1px]'/>
   </div>
  )
}

export default Category