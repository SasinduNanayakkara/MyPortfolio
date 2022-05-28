import React from 'react'
import CVFile from "../../Asserts/Sasindu Nanayakkara - CV.pdf"
function CV() {
  return (
    <div className='mt-10 flex gap-5 justify-center'>
        <a href={CVFile} download className="btn">Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CV