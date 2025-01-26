import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({width,start,para,hover="false"}) => {
  return (
    <div className={`bg-zinc-600 ${hover ===true&& "hover:bg-purple-500"}  p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between `}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className='text-white'>one heading</h3>
          <FaArrowRightLong />
        </div>
        <h1 className="text-3xl font-medium mt-10">whatever heading it is</h1>
      </div>
      <div className="down w-full mt-60 ">
        {start && (
          <>
            <h1 className="text-6xl text-white tracking-tight leading-none font-semibold">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 border-[1px] border-zinc-50 text-white">
              Contact Us{" "}
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-50 font-medium ">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card