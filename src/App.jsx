import React from 'react'
import Navbar from './Components/Navigation/Navbar'
import Routing from './Components/Routing/Routing'
import './App.css'
import LocomotiveScroll from "locomotive-scroll";
import Home from "./Components/Home/Home.jsx";




const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen bg-zinc-800'>
    <Home/>
    </div>
  )
}

export default App