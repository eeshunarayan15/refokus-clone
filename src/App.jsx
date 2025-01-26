import React from 'react'
import Navbar from './Components/Navigation/Navbar'
import Routing from './Components/Routing/Routing'
import './App.css'
import LocomotiveScroll from "locomotive-scroll";




const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen bg-zinc-800'>
      <Navbar />
      <Routing/>
    </div>
  )
}

export default App