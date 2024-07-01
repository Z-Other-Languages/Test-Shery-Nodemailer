// Import the nodemailer module for sending emails
const nodemailer = require("nodemailer");

// Export the sendMail function
exports.sendMail = (req, res) => {
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // SMTP server host
        port: 465, // SMTP server port for secure connection
        secure: true, // Use SSL/TLS for the connection
        auth: {
            user: `${process.env.SENDER_EMAIL}`, // Email address from environment variables
            pass: `${process.env.NODEMAILER_PASSWORD}`, // Email password from environment variables
        },
    });

    // Define email options
    const mailOptions = {
        from: `"Ayush Official 👻" <${process.env.SENDER_EMAIL}>`, // Sender address with a display name
        to: req.body.email, // Recipient email address from the request body
        subject: "NODEMAILER - TEST COMPLETED ✔", // Subject line of the email
        // text: "Hello world?", // Plain text body (commented out)
        html: `<h1>Welcome to Sheryians.</h1>
               <p>You have completed your test successfully.</p>
               <p>Thank You</p>
               <button>Explore More</button>`, // HTML body of the email
    };

    // Send the email using the transporter object
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) return res.send(err); // If an error occurs, send the error as a response
        console.log(info); // Log the email info for debugging
        return res.send(
            "<h1 style='text-align:center;color: tomato; margin-top:10%'><span style='font-size:60px;'>✔️</span> <br />Email Sent! Check your inbox, <br/>check spam in case not found in inbox.</h1><a href='/'>HomePage</a>"
        ); // Send a success message as a response
    });
};
