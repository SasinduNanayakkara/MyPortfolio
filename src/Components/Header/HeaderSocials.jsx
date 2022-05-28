import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from "react-icons/bs"
function HeaderSocials() {
  return (
    <div className='flex flex-col items-center gap-3.5 absolute left-0 bottom-12 ml-64'>
        <a href='https://www.linkedin.com/in/sasindu-nanayakkara/' target="_blank" rel="noreferrer" className='w-5 h-5'><BsLinkedin/></a>
        <a href='https://github.com/SasinduNanayakkara' target="_blank" rel="noreferrer" className='w-5 h-5'><BsGithub/></a>
        <a href='https://www.facebook.com/profile.php?id=100007102998619' target="_blank" rel="noreferrer" className='w-5 h-5'><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocials