import { useState } from 'react';
import './style.css';

function Form() {
    // setting state variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = (e) => {
        // prevent page refresh
        e.preventDefault();

        // notify user on succesful submit
        alert(`Thanks ${name}, your message was sent.`);
        // clear inputs
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container text-center">
            <h1>
                Hello {name} {email} {message}
            </h1>
            <form className="form" onSubmit={onSubmit}>
                <input
                    value={name}
                    name="name"
                    onChange={}
                    type="text"
                    placeholder="name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={}
                    type="text"
                    placeholder="email"
                />
                <input
                    value={message}
                    name="message"
                    onChange={}
                    type="text"
                    placeholder="message"
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
