import React from "react";
import ContactForm from "./ContactForm";
const Contact = () => {
    return (
        <section id="contact" className='flex flex-col h-screen sm:px-4 relative font-mono bg-contact bg-no-repeat bg-cover bg-center'>
            <ContactForm />
        </section>
    )
}

export default Contact;