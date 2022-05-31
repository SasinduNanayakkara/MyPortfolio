import React from 'react';
import ME from "../../Asserts/Sasindu Nanayakkara.jpg"
import "./index.css"
import {GiGraduateCap} from "react-icons/gi"
import {BsLaptop} from "react-icons/bs"
import {VscFolderLibrary} from "react-icons/vsc"
function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2 className='font-bold text-3xl text-zinc-300 '>About Me</h2>

      <div className='container about__container grid'>
        <div className=' about__me w-full rounded-sm grid place-items-center'>
          <div className='about__me-image items-center'>
            <img src={ME} alt='profile pic 2' className='profile__img rounded-full w-1/2 ml-16 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-105' />
          </div>
        </div>

        <div className=' about__content'>
          <div className='about__cards grid grid-cols-3 gap-6'>
            <article className='about__card bg-slate-700 border-2 border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-zinc-600 hover:transition'>
              <GiGraduateCap className='card-icon text-primaryBtnColor ml-10 text-2xl mb-4'/>
              <h5 className='text-base'>Education</h5>
              <small className='text-xs text-amber-300'>2nd year Undergraduate</small>
            </article>

            <article className='about__card bg-slate-700 border-2 border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-zinc-600 hover:transition'>
              <BsLaptop className='text-primaryBtnColor mx-10 text-2xl mb-4'/>
              <h5 className='text-base'>Carrier</h5>
              <small className='text-xs text-amber-300'>Intern Software Engineer</small>
            </article>
            
            <article className='about__card bg-slate-700 border-2 border-transparent rounded-2xl p-8 text-center hover:bg-transparent hover:border-zinc-600 hover:transition'>
              <VscFolderLibrary className='text-primaryBtnColor mx-10 text-2xl mb-4'/>
              <h5 className='text-base'>Projects</h5>
              <small className='text-xs text-amber-300'>20+ projects</small>
            </article>
          </div>

          <p className='my-8 text-amber-100 text-justify'>
          I'm a Data Science undergraduate student at SLIIT. And I am a Intern Software Engineer at Surge Global. I'm currently working on my academic studies and learning more about latest technologies and improve my IT knowledge. And I familiar with Node JS, Typescript, Python, java and React also. My passion lies on Software development, Data science, Artificial Intelligence and neural networks. I stay in tuned with latest technologies in IT world.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About