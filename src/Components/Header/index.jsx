import React from 'react'
import CV from "./CV"
import ME from "../../Asserts/SasinduNanayakkara.jpg"
import HeaderSocials from './HeaderSocials'
function Header() {
  return (
    
    <header className='h-screen pt-12 overflow-x-hidden'>
      <div className="container text-center h-48">
        <h5>Hello I'm</h5>
        <h1>Sasindu Nanayakkara</h1>
        <h5 className="text-slate-500">Passionate Full Stack Developer</h5>
        <CV />

        <div className='bg-slate-900 w-80 h-96 ml-7 absolute left-2/4 -translate-x-1/2 mt-12'>
          <img src={ME} alt='profile pic' />
        <HeaderSocials/>
        </div>

        <a href='#contact' className='absolute right-32  bottom-20 rotate-90 font-light text-sm'>Scroll Down</a>
      </div>
    </header>
    
  )
}

export default Header