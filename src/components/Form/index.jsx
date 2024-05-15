import { useState } from 'react';
import './style.css';

function Form() {
    // setting state variables
    const [clientName, setClientName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onChange = (e) => {
        // name = name of input (see input "name="s below)
        // value = contents entered into form
        const { name, value } = e.target;

        // check which input field is being typed in and call the relevant function
        if (name === 'clientName') {
            return setClientName(value);
        } else if (name === 'email') {
            return setEmail(value);
        } else if (name === 'message') {
            return setMessage(value);
        } else {
            return console.log("oops");
        }

    };

    const onSubmit = (e) => {
        // prevent page refresh
        e.preventDefault();

        // notify user on succesful submit
        alert(`Thanks ${clientName}, your message was sent.`);
        // clear inputs
        setClientName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container text-center">
            <h1>
                Hello {clientName} {email} {message}
            </h1>
            <form className="form" onSubmit={onSubmit}>
                <input
                    value={clientName}
                    name="clientName"
                    onChange={onChange}
                    type="text"
                    placeholder="name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={onChange}
                    type="text"
                    placeholder="email"
                />
                <input
                    value={message}
                    name="message"
                    onChange={onChange}
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
