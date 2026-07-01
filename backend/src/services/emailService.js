const nodemailer = require('nodemailer');

function getTransporter() {
    const user = process.env.EMAIL_USER?.trim();
    const pass = process.env.EMAIL_PASS?.trim().replace(/\s/g, '');

    return nodemailer.createTransport({
        service: 'gmail',
        auth: { user, pass },
    });
}

async function sendMessageNotification({ name, email, phone_number, message }) {
    const user = process.env.EMAIL_USER?.trim();
    const pass = process.env.EMAIL_PASS?.trim();

    if (!user || !pass) {
        console.warn('Email notification skipped: EMAIL_USER or EMAIL_PASS not configured');
        return;
    }

    const to = process.env.EMAIL_TO?.trim() || user;

    await getTransporter().sendMail({
        from: user,
        to,
        replyTo: email,
        subject: `Nuevo mensaje de contacto: ${name}`,
        text: [
            `Nombre: ${name}`,
            `Email: ${email}`,
            `Teléfono: ${phone_number || '—'}`,
            '',
            'Mensaje:',
            message,
        ].join('\n'),
    });

    console.log(`✅ Email notification sent to ${to}`);
}

module.exports = { sendMessageNotification };
