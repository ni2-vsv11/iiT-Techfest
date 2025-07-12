import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Navbar = () => {
  
    return (
     
     <div className="flex flex-items justify-evenly items-center space-x-0 pt-5 pb-5 bg-zinc-700 border-2 border-zinc-700"> 
     <a  href="/">Home</a>
       <a href='#Hero'>Hero</a>
         <a href="#Main">Main</a>
        <a href="#About">About</a>
    </div>

    
  )
}

export default Navbar