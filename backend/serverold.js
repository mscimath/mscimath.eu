/*//Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors'); 

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

console.log('GMAIL_USER:', process.env.GMAIL_USER);
console.log('GMAIL_PASS:', process.env.GMAIL_PASS);

// Nodemailer setup for Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().gmail.user,
        pass: functions.config().gmail.pass,
    },
    tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
    }
});

//Define Cloud Function
exports.sendEmail = functions.https.onRequest((req, res) => {
    //Enable CORS (Cross-Origin Resource Sharing)
    cors(req, res, () => {
        //Extract data from request body
        const { from, subject, text } = req.body;
        const to = 'madejscimath@gmail.com';

        //Mail options
        const mailOptions = {
            from,
            to,
            subject,
            text,
        };

        //Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Error sending email');
            } else {
                console.log('Email sent: ' + info.response);
                res.send('Email sent successfuly!');
            }
        });
    });
});


THE BELOW CODE IS FOR THE SERVER TO RUN LOCALLY BASED ON THE ENVIRONMENT 
VARIABLES PROVIDED IN THE .env FILE
IT IS INSTEAD OF THE ABOVE Define Cloud Function*/
// Example route to send email
require('dotenv').config({ debug: true });
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const allowedOrigins = ['http://mscimath.eu', 'https://mscimath.eu'];
 
// Enable CORS for all routes
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (mobile apps or Postman)
        if(!origin) return callback (null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            // If the origin is not in the allowed list, block the request
            return callback(new Error('Not allowed'), false);
        }
        return callback(null, true);
    }
}));

app.use(express.json());

// Nodemailer setup for Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
    }
});

// Example route to send email
app.post('/send-email', (req, res) => {
    const { from, subject, text } = req.body;
    const to = 'madejscimath@gmail.com';

    // Mail options
    const mailOptions = {
        from,
        to,
        subject,
        text,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email from serverold.js:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
