import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { CiDesktop } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoMdHelpBuoy } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
    const[modal,setModal]=useState(false);

    const showModal=()=>{
         setModal(true);

    }
    const hideModal=()=>{
        setModal(false);
    }

    const navs =[
        {
            
            logo: <CiDesktop className='inline  size-6'/>,
            name:"Swiggy Corporate",
        },
        {
           
            logo:<CiSearch className='inline  size-6'/>,
            name:"Search",

        },
        {
           
            logo: <RiDiscountPercentFill className='inline  size-6'/>,
            name: "Offers " ,
            sup:"NEW"
        },
        {
           
            logo:  <IoMdHelpBuoy className='inline  size-6' />,
            name:" Help",
        },
        {
            
            logo: <CiUser className='inline  size-6'/>,
            name:"Sign In",
        },
        {
           
            logo: <CiShoppingCart className='inline  size-6' />,
            name:" Cart",
        }
    ]
  return (
    <>
    <div className='overlay w-full h-full absolute duration-500 ' style={{opacity:modal?1:0,
        visibility:modal?"visible":"hidden"}} onClick={hideModal}>
        <div className='w-1/3 h-full absolute  bg-white start
        ' style={{left:modal?0:-100}} onClick={(e)=>{
            e.stopPropagation();
        }} >

        </div>

    </div>
    <header className='shadow-xl'>
    <div className='max-w-[1400px] mx-auto flex items-center justify-between '>
        <div className='flex items-center gap-x-12'>
        <div className='w-[100px]'>
           <img src="assests/logo.png " className='w-full hover:scale-110 ease-out duration-500' alt="" />
        </div>
        <div className='gap-x-2 flex items-center '>
            <span className='border-b-2 border-black font-bold  hover:text-orange-500'>Other</span>
            <IoMdArrowDropdown  className='inline text-orange-600 cursor-pointer'onClick={showModal} />
        </div>
        </div>

        <div className='flex items-center  text-[18px] font-semibold text-slate-700 gap-x-16'>
            {
                navs.map((nav,index)=>{
                    return <li className='list-none hover:text-orange-500 duration-300 cursor-pointer flex gap-x-2 items-center' key={index}>
                        {nav.logo}
                        {nav.name}
                        <sup className='text-orange-500'>{nav.sup}</sup>
                    </li> 
                })
            }
        
    </div>
    </div>
    </header>
    </>
  )
}

export default Header