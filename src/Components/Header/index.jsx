import React from 'react'
import CV from "./CV"
import ME from "../../Asserts/SasinduNanayakkara.jpg"
import HeaderSocials from './HeaderSocials'
import "./index.css"
import "../../index.css"
function Header() {
  return (
    
    <header className='head h-screen pt-12 overflow-hidden'>
      <div className="container header__container text-center h-full relative">
        <h5 className='text-hello'>Hello I'm</h5>
        <h1 className='title'>Sasindu Nanayakkara</h1>
        <h5 className="title-desc text-slate-500">Passionate Full Stack Developer</h5>
        <CV/>

        <div className='image-div bg-slate-900 w-80 h-96 ml-7 absolute left-2/4 -translate-x-1/2 mt-12'>
          <img src={ME} alt='profile pic' className='profile-image rounded-full'/>
        <HeaderSocials/>
        </div>
      </div>
    </header>
    
  )
}

export default Header