import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiPython, SiNodedotjs, SiMongodb, SiJava, SiTypescript, SiTerraform, SiExpress} from 'react-icons/si'
import {FaReact, FaAndroid} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2 className='font-bold text-3xl text-zinc-300'>My Experience</h2>

      <div className='container experience__container w-1/2 mx-96'>
        <div className='experience__frontend border-2 border-slate-700 bg-slate-700 py-7 pl-20 rounded-3xl hover:bg-transparent hover:border-2 hover:border-slate-700 hover:cursor-default hover:transition'>
          <h3 className='text-center mr-20 text-lg mb-8 text-primaryBtnColor'>Tools and Technologies</h3>
          <div className='experience__content grid grid-cols-2 w-full'>
            <article className='experience__details flex gap-4 mb-3'>
              <AiFillHtml5 className='text-secondaryBtnColor' size={30}/>
              <div>
              <h4 className='text-secondaryBtnColor'>HTML</h4>
              <small className='text- text-slate-400 text-slate-400'>Experienced</small>
              </div>
            </article>
            <article className='experience__details flex gap-4 mb-3'>
              <DiCss3 className='text-secondaryBtnColor' size={30}/>
              <div>
              <h4 className='text-secondaryBtnColor'>CSS</h4>
              <small className='text- text-slate-400'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details flex gap-4 mb-3'>
              <SiPython className='text-secondaryBtnColor' size={30}/>
              <div>
              <h4 className='text-secondaryBtnColor'>Python</h4>
              <small className='text- text-slate-400'>Experienced</small>
              </div>
            </article>
            <article className='experience__details flex gap-4 mb-3'>
              <SiNodedotjs className='text-secondaryBtnColor' size={30}/>
              <div>
              <h4 className='text-secondaryBtnColor'>Node JS</h4>
              <small className='text- text-slate-400'>Experienced</small>
              </div>
            </article>
            <article className='experience__details flex gap-4 mb-3'>
              <FaReact className='text-secondaryBtnColor' size={30}/>
              <div>
              <h4 className='text-secondaryBtnColor'>React</h4>
              <small className='text- text-slate-400'>Experienced</small>
              </div>
            </article>
            <article className='experience__details flex gap-4 mb-3'>
              <SiMongodb className='text-secondaryBtnColor' size={30}/>
              <div>
              <h4 className='text-secondaryBtnColor'>Mongo DB</h4>
              <small className='text- text-slate-400'>Experienced</small>
              </div>
            </article>
            <article className='experience__details flex gap-4 mb-3'>
              <GrMysql className='text-secondaryBtnColor' size={30}/>
              <div>
              <h4 className='text-secondaryBtnColor'>SQL</h4>
              <small className='text- text-slate-400'>Experienced</small>
              </div>
            </article>
            <article className='experience__details flex gap-4 mb-3'>
              <SiJava className='text-secondaryBtnColor' size={30}/>
              <div>
              <h4 className='text-secondaryBtnColor'>Java</h4>
              <small className='text- text-slate-400'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details flex gap-4 mb-3'>
              <FaAndroid className='text-secondaryBtnColor' size={30}/>
              <div>
              <h4 className='text-secondaryBtnColor'>Android</h4>
              <small className='text- text-slate-400'>Experienced</small>
              </div>
            </article>
            <article className='experience__details flex gap-4 mb-3'>
              <SiTypescript className='text-secondaryBtnColor' size={30}/>
              <div>
              <h4 className='text-secondaryBtnColor'>Typescript</h4>
              <small className='text- text-slate-400'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details flex gap-4 mb-3'>
              <SiTerraform className='text-secondaryBtnColor' size={30}/>
              <div>
              <h4 className='text-secondaryBtnColor'>Terraform</h4>
              <small className='text- text-slate-400'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details flex gap-4 mb-3'>
              <SiExpress className='text-secondaryBtnColor' size={30}/>
              <div>
              <h4 className='text-secondaryBtnColor'>Express JS</h4>
              <small className='text- text-slate-400'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience