import React, {useState} from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiBook, BiMessageAltDetail} from "react-icons/bi"
import {IoMdPaper} from "react-icons/io"

function Nav() {

  const [active, setActive] = useState('#')
  return (
    <nav className='bg-black bg-opacity-25 w-max block py-2 px-7 z-20 fixed left-1/2 -translate-x-1/2 bottom-3 flex gap-3 rounded-full backdrop-blur-lg'>
      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Tippy content="Home"><a href='#' onClick={() => setActive("#")} className={active === "#" ? "bg-transparent p-4 rounded-2xl flex text-base hover:bg-amber-500 hover:bg-opacity-20 bg-slate-500" : "bg-transparent p-4 rounded-2xl flex text-base hover:bg-amber-500 hover:bg-opacity-20"}><AiOutlineHome size={20}/></a></Tippy>
      <Tippy content="About Me"><a href='#about' onClick={() => setActive("#about")} className={active === "#about" ? "bg-transparent p-4 rounded-2xl flex text-base hover:bg-amber-500 hover:bg-opacity-20 bg-slate-500" : "bg-transparent p-4 rounded-2xl flex text-base hover:bg-amber-500 hover:bg-opacity-20"}><AiOutlineUser size={20}/></a></Tippy>
      <Tippy content="My Experience"><a href='#experience' onClick={() => setActive("#experience")} className={active === "#experience" ? "bg-transparent p-4 rounded-2xl flex text-base hover:bg-amber-500 hover:bg-opacity-20 bg-slate-500" : "bg-transparent p-4 rounded-2xl flex text-base hover:bg-amber-500 hover:bg-opacity-20"}><BiBook size={20}/></a></Tippy>
      <Tippy content="My Projects"><a href='#portfolio' onClick={() => setActive("#portfolio")} className={active === "#portfolio" ? "bg-transparent p-4 rounded-2xl flex text-base hover:bg-amber-500 hover:bg-opacity-20 bg-slate-500" : "bg-transparent p-4 rounded-2xl flex text-base hover:bg-amber-500 hover:bg-opacity-20"}><IoMdPaper size={20}/></a></Tippy>
      <Tippy content="Contact Me"><a href='#contact' onClick={() => setActive("#contact")} className={active === "#contact" ? "bg-transparent p-4 rounded-2xl flex text-base hover:bg-amber-500 hover:bg-opacity-20 bg-slate-500" : "bg-transparent p-4 rounded-2xl flex text-base hover:bg-amber-500 hover:bg-opacity-20"}><BiMessageAltDetail size={20}/></a></Tippy>
    </nav>
  )
}

export default Nav