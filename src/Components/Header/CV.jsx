import React from 'react'
import CVFile from "../../Asserts/Sasindu Nanayakkara-CV.pdf"
import "../../index.css"
function CV() {
  return (
    <div className='cv-div mt-10 flex gap-5 justify-center lg:mt-10'>
        <a href={CVFile} download className="btn cv-btn">Download CV</a>
        <a href='#contact' className='btn btn-primary contact-btn'>Let's Talk</a>
    </div>
  )
}

export default CV