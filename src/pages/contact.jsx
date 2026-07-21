import {useState} from 'react';
function Contact() {
        const[message, setMessage] = useState('');

    return (
           <div>
            <h2>Contact Me</h2>
            <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..">
            </input>
            <p>{message}</p>
            <p>Character count:{message.length}</p>
        </div>
     
    );
}
export default Contact;