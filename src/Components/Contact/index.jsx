import React, { useRef, useState } from 'react';
import "./index.css"
import emailjs from 'emailjs-com';
import Notification from '../Notification/Notification';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
function Contact() {
  const form = useRef();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qkyde3p', 'template_jhojmnn', form.current, 'PMj7Cg-kEH3U6zD0m')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setNotify({
            isOpen: true,
            message: "Message sent successfully",
            type: "success",
          });
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2 className='font-bold text-3xl text-zinc-300 '>Contact</h2>

      <div className="container contact__container w-2/3 grid ">
        <div className="contact__options flex flex-col gap-5">
          <article className='contact__option bg-slate-700 p-5 rounded-2xl text-center border-2 border-transparent transition hover:bg-transparent hover:border-slate-700'>
            <div className='pl-8'><MdOutlineEmail size={30} className='contact__option-icon ml-20 mb-2 text-primaryBtnColor'/></div>
            <h4>Email</h4>
            <h5>sas.nkr50@gmail.com</h5>
            <a href="mailto:sas.nkr50@gmail.com" target="_blank" rel="noreferrer" className='mt-3 inline-block'>Send a message</a>
          </article>
          <article className='contact__option bg-slate-700 p-5 rounded-2xl text-center border-2 border-transparent transition hover:bg-transparent hover:border-slate-700'>
          <div className='pl-8'><BsWhatsapp size={30} className='contact__option-icon ml-20 mb-2 text-primaryBtnColor'/></div>
            <h4>Whatsapp</h4>
            <h5>+94 78 4392 088</h5>
            <a href="https://api.whatsapp.com/send?phone=94784392088" target="_blank" rel="noreferrer" className='mt-3 inline-block'>Send a message</a>
          </article>
          <article className='contact__option bg-slate-700 p-5 rounded-2xl text-center border-2 border-transparent transition hover:bg-transparent hover:border-slate-700'>
          <div className='pl-8'><RiMessengerLine size={35} className='contact__option-icon ml-20 mb-2 text-primaryBtnColor'/></div>
            <h4>Messenger</h4>
            <h5>Sasindu Nanayakkara</h5>
            <a href="https://m.me/id=100007102998619" target="_blank" rel="noreferrer" className='mt-3 inline-block'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5'>
          <input type="text" name="name" placeholder='Full Name' required className='form-item w-full p-4 rounded-lg bg-transparent border-2 border-slate-700 resize-none focus:border-slate-700'/>
          <input type="email" name="email" placeholder='Email' required className='form-item w-full p-4 rounded-lg bg-transparent border-2 border-slate-700 resize-none focus:border-slate-700' />
          <textarea name="message" rows="7" placeholder='Your Message' className='form-item w-full p-4 rounded-lg bg-transparent border-2 border-slate-700 resize-none focus:border-slate-700' required></textarea>
          <button type="submit" className='btn btn-primary border-2 hover:bg-transparent hover:border-primaryBtnColor hover:text-primaryBtnColor'>Submit</button>
        </form>
      </div>
      <Notification notify={notify} setNotify={setNotify}/>
    </section>
  )
}

export default Contact