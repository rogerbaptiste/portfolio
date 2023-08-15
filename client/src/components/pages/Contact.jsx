import { Heading } from "../common/Heading";
import { contact } from "../data/dummydata";
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; // Updated import for emailjs library

export const ContactUs = () => {
    const form = useRef();
    const [isFormValid, setIsFormValid] = useState(true); // State to track form validity
    const [isEmailSent, setIsEmailSent] = useState(false); // State to track email sent status

    const validateForm = () => {
        const formElements = form.current.elements;
        let isValid = true;

        for (let i = 0; i < formElements.length; i++) {
            if (!formElements[i].checkValidity()) {
                isValid = false;
                break;
            }
        }

        setIsFormValid(isValid);
        return isValid;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
            emailjs.sendForm('service_e3ygi7f', 'template_ldlvkvi', form.current, 'FUiF48kqjpQ3QO9xd')
                .then((result) => {
                    console.log(result.text);
                    setIsEmailSent(true); // Set email sent status to true
                    setIsFormValid(true); // Reset form validity
                    form.current.reset(); // Clear form fields
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return (
        <div className='contact'>
            <div className='container'>
                <Heading title='Keep In Touch' />
                <div className='content flexsb'>
                    <div className='right'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='flex'>
                                <input type='text' placeholder='Name' data-aos='flip-left' required />
                                <input type='email' placeholder='Your Email' data-aos='flip-right' required />
                            </div>
                            <input type='text' placeholder='Subject' data-aos='flip-up' />
                            <textarea name='message' cols='30' rows='10' data-aos='flip-down'></textarea>
                            <button type='submit' data-aos='zoom-in-up'>Submit</button>
                            {!isFormValid && <p>Please fill in all required fields.</p>}
                            {isEmailSent && <p className="popup">Thank you for your email! Please anticipate a response within 24 hours. </p>}
                        </form>
                    </div>
                    <div className='left'>
                        {contact.map((item) => (
                            <div className='box' data-aos='zoom-in' key={item.id}>
                                <i>{item.icon}</i>
                                <p>{item.text1}</p>
                                <p>{item.text2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Contact = () => {
    return (
        <ContactUs />
    );
};
