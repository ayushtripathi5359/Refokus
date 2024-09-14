import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title="Get Started"}) {
  return (
    <div>
        <button className=' flex items-center w-auto px-3 py-1 rounded-full bg-zinc-100 text-black font-medium text-sm gap-4'> 
            <span>{title}</span>
            <IoIosReturnRight className='text-base' />

        </button>
    </div>
  )
}

export default Button