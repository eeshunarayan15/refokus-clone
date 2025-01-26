import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({btn="Get Started"}) => {
  return (
      <div className='min-w-40 px-3 py-2 bg-zinc-50 text-black font-semibold text-xs rounded-full flex justify-between items-center'>
      <span className='text-sm font-regular'>{btn }</span>
          <IoIosReturnRight/>
    </div>
  )
}

export default Button