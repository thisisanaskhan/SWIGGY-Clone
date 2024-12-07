import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import categories from '../data/category.json'

const Category = () => {
  
 


  return ( 
   <div>
     <div className='max-w-[1250px] mx-auto flex items-center justify-between'>
        <h1 className='font-bold text-2xl'>What's on your mind?</h1>
      <div className='flex gap-x-2'>
        <button className='p-4 bg-slate-500 rounded-full'><FaArrowLeft /></button>
        <button className='p-4 bg-slate-500 rounded-full'><FaArrowRight />
        </button>
      </div>
    </div>
      <div className='flex'>
       {
         categories.map((category,index)=>{
          return(
            <div className=' flex grow shrink-0'>
             <img src={  "./../../public/images/"+category.image} alt="" />
             {category.path}
          </div>
          )
         })
       }
      </div>
   </div>
  )
}

export default Category