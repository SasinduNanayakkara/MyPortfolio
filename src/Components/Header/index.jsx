import React from 'react'
import CV from "./CV"
import HeaderSocials from './HeaderSocials'
import ME from "../../Asserts/SasinduNanayakkara.jpg"
function Header() {
  return (
    <header className='h-screen pt-28 overflow-hidden'>
      <div className="container text-center h-full relative">
        <h5>Hello I'm</h5>
        <h1>Sasindu Nanayakkara</h1>
        <h5 className="text-slate-500">Passionate Full Stack Developer</h5>
        <CV />
        <HeaderSocials />

        <div className='bg-slate-900 w-80 h-96 ml-10 absolute left-2/4 -translate-x-1/2 mt-16 rounded-t-full rounded-b-full rounded-l-none rounded-r-none from-amber-400'>
          <img src={ME} alt='profile pic' />
        </div>

        <a href='#contact' className=''>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header