import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import pic from '../assets/photo.jpg'
import {Link} from 'react-scroll'


  

const Navbar = () => {
  const [menu,setMenu]=useState(false)

  const navItems = [{id:1,text: "Home"},
    {id:2,text:"About"},
    {id:3,text:"Portfolio"},
    {id:4,text:"Contact"}
  ]
  return (
    <div className='max-w-screen-2xl container max-w-full px-4 md:px-20 shadow-md fixed h-16 top-0 left-0 right-0 z-50 bg-white ' >

      <div className='flex justify-between h-16 items-center'>

        <div className='flex space-x-2 '> 

          <img src={pic} className='h-12 w-12 rounded-full' alt="logo" />
          <h1 className='font-semibold text-xl cursor-pointer'>Subham <span className='text-green-500 text-2xl'>@</span>
          <p className='text-sm'>Full Stack Developer</p>
          </h1>
        </div>
        {/* Desktop navbar */}
        <div>

          <ul className='hidden md:flex space-x-8'>
            
           {navItems.map((items,index) =>(<li className='hover:scale-105 duration-200 cursor-pointer' key={index}>
            <Link to={items.text}
          smooth={true}
          duration={500}
          offset={-70}
          activeClass='active'>{items.text}</Link></li>))}
          </ul>
          <div onClick={()=>setMenu(!menu)} className='md:hidden'>
        {menu ? <RxHamburgerMenu  size={24}/>:<RxCross1 size={24}/>}
      </div>
        </div>
       
      </div>
      {/* Mobile navbar */}
      
      {menu && (
      <div>
        <ul>
        <ul className=' md:hidden flex flex-col items-center justify-center space-y-4 text-xl bg-white'>

        {navItems.map((items,index) =>(<li className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={index}>

          <Link 
          onClick={()=>setMenu(!menu)}
          to={items.text}
          smooth={true}
          duration={500}
          offset={-70}
          activeClass='active'>
          
          {items.text}</Link>
          </li>))}
          </ul>
        </ul>
      </div>
      )}
      
      
      
      
      
       </div>
  )
}

export default Navbar