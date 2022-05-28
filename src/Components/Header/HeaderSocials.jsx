import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from "react-icons/bs"
function HeaderSocials() {
  return (
    <div className='flex justify-center mt-5 mr-6'>
        <a href='https://www.linkedin.com/in/sasindu-nanayakkara/' target="_blank" rel="noreferrer" className='pr-10 '><BsLinkedin size={30}/></a>
        <a href='https://github.com/SasinduNanayakkara' target="_blank" rel="noreferrer" className='pr-10 '><BsGithub size={30}/></a>
        <a href='https://www.facebook.com/profile.php?id=100007102998619' target="_blank" rel="noreferrer" className='pr-10 '><BsFacebook size={30}/></a>

    </div>
  )
}

export default HeaderSocials