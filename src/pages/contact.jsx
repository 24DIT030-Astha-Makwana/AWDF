// import { useState } from 'react';

// function Contact() {
//     const [message, setMessage] = useState('');

//     return (
//         <div className="contact-page">
//             <div className="contact-card">
//                 <div className="contact-intro">
//                     <p className="contact-eyebrow">Get in touch</p>
//                     <h2 className="section-title">Contact Me</h2>
//                     <p className="contact-text">
//                         Feel free to share a project idea, question, or opportunity.
//                     </p>
//                 </div>

//                 <form className="contact-form">
//                     <label className="contact-label" htmlFor="message">
//                         Your message
//                     </label>
//                     <textarea
//                         id="message"
//                         className="contact-input"
//                         rows="5"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         placeholder="Type your message here..."
//                     />

//                     <button className="contact-button" type="button">
//                         Send Message
//                     </button>
//                 </form>

//                 <p className="contact-message">{message || 'Your message preview will appear here.'}</p>
//                 <p className="contact-count">Character count: {message.length}</p>
//             </div>
//         </div>
//     );
// }

// export default Contact;
import { useState } from 'react';

function Contact() {
    const [message, setMessage] = useState('');

    return (
        <div className="contact-page">
            <div className="contact-card">

                <div className="contact-intro">
                    <p className="contact-eyebrow">Get in touch</p>
                    <h2 className="section-title">Contact Me</h2>
                    <p className="contact-text">
                        Feel free to share a project idea, question, or opportunity.
                    </p>
                </div>

                <form className="contact-form">
                    <label className="contact-label" htmlFor="message">
                        Your message
                    </label>

                    <textarea
                        id="message"
                        className="contact-input"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                    />

                    {/* Live Character Count */}
                    <p className="contact-count">
                        Character count: {message.length}
                    </p>

                    <button className="contact-button" type="button">
                        Send Message
                    </button>
                </form>

                <p className="contact-message">
                    {message || 'Your message preview will appear here.'}
                </p>

            </div>
        </div>
    );
}

export default Contact;