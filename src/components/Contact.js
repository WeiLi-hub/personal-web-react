import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section id="contact" className='about_me flex flex-col h-screen sm:px-4 relative font-mono bg-cover bg-contact'>
            <ContactForm />
        </section> 
    )
}

export default Contact;