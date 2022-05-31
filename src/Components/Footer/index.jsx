import React from 'react'
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs';
import "./index.css";
function Footer() {
  return (
    <footer className='bg-slate-700 py-12 text-center text-base mt-28'>
      <a href="#header" className='footer__logo text-4xl font-medium mb-8 inline-block'>Sasindu Nanayakkara</a>

      <ul className='permalinks flex flex-wrap justify-center gap-8'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100007102998619" className='text-white bg-primaryBtnColor transition border-2 border-transparent p-2 rounded-xl flex hover:bg-transparent hover:border-slate-700 hover:text-primaryBtnColor'><BsFacebook size={25}/></a>
        <a href="https://www.instagram.com/_sasiya__/?hl=en" className='text-white bg-primaryBtnColor transition border-2 border-transparent p-2 rounded-xl flex hover:bg-transparent hover:border-slate-700 hover:text-primaryBtnColor'><BsInstagram size={25}/></a>
        <a href="https://www.linkedin.com/in/sasindu-nanayakkara/" className='text-white bg-primaryBtnColor transition border-2 border-transparent p-2 rounded-xl flex hover:bg-transparent hover:border-slate-700 hover:text-primaryBtnColor'><BsLinkedin size={25}/></a>
      </div>

      <div className="footer__copyright mb-16 text-primaryBtnColor">
        <small>&copy; Sasindu Nanayakkara All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer