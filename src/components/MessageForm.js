import React, { useState } from 'react';
import './MessageForm.css'

const MessageForm = () => {
    const [from, setFrom] = useState('');
    const [subject, setSubject] = useState('');
    let [text, setText] = useState('');
    const [status, setStatus] = useState('idle'); // to manage success or error messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const messageBody = `MSCIMATH | ${from}: ${text}`; //Combine email and text

        try {
            //Make an API call to the backend to send email
            const response = await fetch('https://email-service-7n8w.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: from,
                    subject: subject,
                    text: messageBody,
                }),
                //Include the sender's email, subject, and text in the query parameters
                //Note: Might want to validate the form data before sending the email
                //Example: `/send-email?from=${from}&subject=${subject}&text=${text}`
            });

            if (response.ok) {
                const data = await response.text();
                console.log('Email sent:', data.message); // Log success message
                setStatus('Email sent successfully!'); // Set success status
                // Clear the form fields after submission
                setFrom("");
                setSubject("");
                setText("");
            } else {
                const errorData = await response.text(); //Get error message
                console.error('Failed to send email.', response.statusText);
                setStatus(`Failed to send email: ${errorData.error}`); 
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Error sending email. Please try again later.');
        }

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000); 
    };

    const getButtonText = () => {
        switch (status) {
            case 'sending': return 'Sending...';
            case 'success': return 'Sent ✅';
            case 'error': return 'Error ❌';
            default: return 'Send Message';
        }
    };

    return (
        <form id ="contact-form" onSubmit={handleSubmit}>
            <div className='form-item'>
                <label>
                    Your Email: &nbsp;
                    <input 
                        type="email" 
                        value={from} 
                        onChange={(e) => setFrom(e.target.value)} 
                        required 
                    />
                </label>
            </div>
            <div className='form-item'>
                <label>
                    Subject: &nbsp;
                    <input 
                        type="text" 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                        required 
                    />
                </label>
            </div>
            <div className='form-item'>
                <label>
                    Message: &nbsp;
                    <textarea 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        required 
                    />
                </label>
            </div>
            <div className='form-item'>
                <button type="submit" disabled={status === 'sending'}>
                    {getButtonText()}
                </button>
            </div>

            {status === 'success' && <p className='success-message'>Email sent successfully!</p>}
            {status === 'error' && <p className='error-message'>Failed to send email.</p>}
        </form>
    );    
};

export default MessageForm;