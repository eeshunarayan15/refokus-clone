import React from 'react'
import { NavLink } from 'react-router';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <nav className="max-w-screen-xl p-6 mx-auto bg-zinc-800 flex  justify-between border-b-[2px] border-zinc-100">
      {/* <NavLink to="/">Home</NavLink> */}
      <div className='left flex justify-center items-center'>
        <div className="w-20  px-2 bg-white py-1 rounded-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbCqafvZBzjnkFCIj6pg7qFtiNdo2pxLg5GQ&s"
            alt=""
          />
        </div>
        <div className="text-white ml-10 flex gap-7">
          <NavLink to={"/"}>Home</NavLink>
          <span className="flex items-center space-x-2">
            <span
              style={{ boxShadow: "0 0 0.45 em #00FF19" }}
              className="w-2 h-2 bg-green-500 rounded-full"
            ></span>
            <NavLink>Work</NavLink>
          </span>
          <NavLink>Culture</NavLink>
          <NavLink>Home</NavLink>
          <span className="w-[2px] h-5 bg-zinc-500"></span>
          <NavLink>News</NavLink>
        </div>
      </div>
          <div className='right'>
           <Button/>
      </div>
    </nav>
  );
}

export default Navbar