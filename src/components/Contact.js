import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section id="contact" className='flex flex-col h-screen sm:px-4 from-blue-800 justify-center bg-gradient-to-tr bg-pink-500 relative font-mono'>
            <ContactForm />
        </section>
    )
}

export default Contact;