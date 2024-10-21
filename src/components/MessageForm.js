import React, { useState } from 'react';
import './MessageForm.css'

const MessageForm = () => {
    const [from, setFrom] = useState('');
    const [subject, setSubject] = useState('');
    let [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //Make an API call to the backend to send email
            text = from + ": " + text
            const response = await fetch('https://27c262ee-b7bd-418f-a884-a006780189a5-00-3sxd9pjuy0fy7.picard.replit.dev/', {
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
                const data = await response.json();
                console.log('Email sent:', data);
            } else {
                console.error('Failed to send email.', response.statusText);
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