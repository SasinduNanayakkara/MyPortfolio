import React from 'react'
import "./index.css"
import {BsGithub} from "react-icons/bs"
import {GiPlainCircle} from "react-icons/gi"
import IMG1 from "../../Asserts/LMS.png";
import IMG2 from "../../Asserts/mobile app.png";
import IMG3 from "../../Asserts/python image.jpeg";
import IMG4 from "../../Asserts/face detection.jpeg";
import IMG5 from "../../Asserts/terraform.png";
import IMG6 from "../../Asserts/blog app.png";

import {techData} from "./data";

const imgArr = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2 className='font-bold text-3xl text-zinc-300 '>Projects</h2>
      <div className='container portfolio__container grid grid-cols-3 gap-10 items-center'>
      
      {techData.map(({id, image, title, description, techName, color, url}) => {
        return (
        <article key={id} className='portfolio__item bg-slate-700 p-5 rounded-3xl border-2 border-transparent transition hover:border-slate-700 hover:bg-transparent'>
          <div className='portfolio__item-image'>
            <img src={imgArr[id-1]} className='rounded-2xl mb-3 w-full' alt={title} />
          </div>
          <h3 className='text-center font-bold'>{title}</h3>
          <p className='text-center text-xs text-slate-400 mb-2'>{description}</p>
          <div className='flex text-center text-slate-500 gap-3 mb-3 text-sm'>
            <p className='flex pl-5'><GiPlainCircle size={18} className={color} />&nbsp;{techName}</p>
            
          </div>
          <a href={url} className='git__button btn btn-primary border-2 hover:bg-transparent hover:border-primaryBtnColor hover:text-primaryBtnColor mx-20' target='blank'><div className='flex'><BsGithub size={30}/>&nbsp;&nbsp;GitHub</div></a>
        </article>
        )
      })}
      </div>
    </section>
  )
}

export default Portfolio