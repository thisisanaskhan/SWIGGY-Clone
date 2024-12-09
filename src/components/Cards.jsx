import React from 'react'
import Logo from './Logo';

const Cards = (props) => {
  return (
    <div className='w-[260px]  shrink-0 grow shadow-md'>
      <div className='h-[180px] overflow-hidden relative rounded-lg ' >
      <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + "/images/" + props.image} alt="" />
      <div className='image-overlay absolute text-white w-full h-full top-0 flex items-end text-lg font-bold'>
        {props.offer}
          
      </div>
      </div>
      <div className='ml-3'>
        <div className='font-semibold text-lg mt-2'>{props.title}</div>
        <div className='flex items-center gap-x-1'> <Logo/>{props.rating} <span className='ml-1'>{props.minTime}-{props.maxTime}mins</span></div>

        <div className='font-semibold  text-gray-500'>{props.name} </div>
        <div className='font-semibold text-gray-500'>{props.place}</div>
      </div>
       
    </div>
  )
}

export default Cards