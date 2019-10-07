const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'noreply@viktorkanev.fit',
        subject: 'Welcome to the app',
        text: `Hello ${name}, you have successfully registered!`,
        html: `<h1>Hello ${name}, you have successfully registered!</h1>`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'noreply@viktorkanev.fit',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}, we are sorry to see you go.`,
        html: `<h1>Goodbye ${name}, we are sorry to see you go.</h1>`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}