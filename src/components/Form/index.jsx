import { useState } from 'react';
import './style.css';

function Form() {
    // setting state variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className="container text-center">
            <h1>
                Hello {name} {email} {message}
            </h1>
            <form className="form" onSubmit={}>
                <input
                    value={name}
                    name="name"
                    onChange={}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={}
                    type="text"
                    placeholder="Email"
                />
                <input
                    value={message}
                    name=""
                    onChange={}
                    type="text"
                    placeholder="Message"
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;
