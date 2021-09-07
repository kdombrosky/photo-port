import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // Hook to manage form data and initialize values of the state (name:emptystring)
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // destructure formstate from formState.name or .email to just {name} & {email}
    const { name, email, message } = formState;
    // to handle the error state
    const [errorMessage, setErrorMessage] = useState('');

    // handle change, on each change/blur: update the data that will be sent 
    function handleChange(e) {
        // validate data before it's sent
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }  
        
        // setFormState({...formState, name: e.target.value })
        // if no errors, update formState value for the name/email/message properties with the e.target.value
        if (!errorMessage) {
            // use spread operator to prevent formState object from being overwritten
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    // handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    
    // Use handleChange and handleSubmit functions below to render JSX
    // JSX
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>
            {/* conditionally render error message if errorMessage */}
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;