import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ReactiveButton from 'reactive-button';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j0v1aet', 'template_59dyxwl', form.current, 'jYxXD_Yu8dxltDpls')
            .then((result) => {
                console.log(result.text);
                console.log("Message Sent")
                toast.success('Message send successful, I will get back to you soon!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                });
                document.getElementById("contact-form").reset();
            }, (error) => {
                console.log(error.text);
                toast.error('Message send failure, please try again!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                });
                document.getElementById("contact-form").reset();
            });
    };
    return (
        <form ref={form} id={'contact-form'} onSubmit={sendEmail}>
            <ToastContainer />
            <div className="h-3/4 w-1/2 backdrop-blur-lg backdrop-brightness-110 top-[12.5%] left-1/4 absolute flex flex-col py-8 justify-between shadow-2xl">
                <h1 className='mt-8 text-center text-slate-200 font-extrabold text-4xl'>Contact Me</h1>
                <div className="flex mr-[13%] after:content-['*'] after:ml-1 after:text-red-500 items-center">
                    <label className='w-[30%] text-end pr-2 font-bold text-xl'>Name: </label>
                    <input className="mt-1 px-3 py-2 bg-white border-1 shadow-sm rounded-xl border-black placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-2 w-full" autoComplete="off" type="text" name="user_name" placeholder="Your name" required />
                </div>
                <div className="flex mr-[13%] after:content-['*'] after:ml-1 after:text-red-500 items-center">
                    <label className='w-[30%] text-end pr-2 font-bold text-xl'>Email: </label>
                    <input className='mt-1 px-3 py-2 bg-white border-1 shadow-sm rounded-xl border-black placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-2 w-full' autoComplete="off" type="email" name="user_email" placeholder="You@example.com" required />
                </div>
                <div className="flex mr-[13%] after:content-['*'] after:ml-1 after:text-red-500 items-center">
                    <label className='w-[30%] text-end pr-2 font-bold flex-grow text-xl'>Message: </label>
                    <textarea className='mt-1 px-3 py-2 bg-white border-1 shadow-sm rounded-xl border-black placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-2 w-full' style={{ resize: "none" }} name="message" placeholder="Leave me a message....." required />
                </div>
                <div className='justify-center flex'>
                    <ReactiveButton color="primary" size="large" shadow idleText="Submit" type = {'submit'}/>
                </div>
            </div>
        </form>

    );

}

export default ContactForm;