import React, { useState } from 'react';
import './MessageForm.css'

const MessageForm = () => {
    const [from, setFrom] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //Make an API call to the backend to send email
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: from,
                    subject: subject,
                    text: text,
                }),
                //Include the sender's email, subject, and text in the query parameters
                //Note: Might want to validate the form data before sending the email
                //Example: `/send-email?from=${from}&subject=${subject}&text=${text}`
            });

            if (response.ok) {
                console.log('Email sent successfully!');
            } else {
                console.error('Failed to send email.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <form id ="contact-form" onSubmit={handleSubmit}>
            <div className='form-item'>
                <label>
                    Your Email: &nbsp;
                    <input type="email" value={from} onChange={(e) => setFrom(e.target.value)} required />
                </label>
            </div>
            <div className='form-item'>
                <label>
                    Subject: &nbsp;
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                </label>
            </div>
            <div className='form-item'>
                <label>
                    Message:
                    <textarea value={text} onChange={(e) => setText(e.target.value)} required />
                </label>
            </div>
            <div className='form-item'>
                <button type="submit">Send Message</button>
            </div>
        </form>
    );    
};

export default MessageForm;