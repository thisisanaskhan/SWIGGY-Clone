import React from 'react'

const Category = () => {
  return (
   <div>
     <div className='max-w-[1250px] mx-auto flex items-center justify-between'>
        <h1 className='font-bold text-2xl'>What's on your mind?</h1>
      <div className='flex gap-x-2'>
        <button className='p-4 bg-slate-500 rounded-full'></button>
        <button className='p-4 bg-slate-500 rounded-full'></button>
      </div>
    </div>
   </div>
  )
}

export default Category