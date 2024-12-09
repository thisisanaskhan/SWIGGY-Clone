import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import restaurant from '../data/restaurantChains.json';
import Cards from './Cards';

const Toprestro = () => {
    const[slide,setSlide]=useState(0);

  const prevSlide=()=>{

     setSlide(slide+3);

  }
  const nextSlide=()=>{
    
    setSlide(slide-3);
    
  }
  return (
    <div className='max-w-[1250px] mx-auto overflow-hidden mt-2 '>
     <div className=' flex items-center justify-between'>
        <h1 className='font-bold text-2xl'>Top Restraunt in your City</h1>
      <div className='flex gap-x-2'>
        <button className='p-3 bg-slate-300 rounded-full' onClick={nextSlide}><FaArrowLeft /></button>
        <button className='p-3 bg-slate-300 rounded-full'onClick={prevSlide}><FaArrowRight />
        </button>
      </div>
     
    </div>
    <div className='flex gap-5 overflow-hidden mt-3'>
    {
        restaurant.map((k,i)=>{
          return <div className=' style={{transform:`translateX(-${slide*100}%)`}}'><Cards {...k} key={i}/></div>
        })
      }

    </div>

    </div>
  )
}

export default Toprestro