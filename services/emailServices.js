const nodemailer = require('nodemailer');

// Konfigurasi transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Gunakan host SMTP Gmail
    port: 587, // Gunakan port 587 untuk Gmail (non-SSL, TLS)
    secure: false, // False untuk TLS, true untuk SSL (port 465)
    auth: {
        user: process.env.EMAIL_USER, // Email Anda
        pass: process.env.EMAIL_PASS, // Password email Anda
    },
});

// Fungsi untuk mengirimkan email
const sendGiftEmail = async (userEmail, giftVarian) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // Email pengirim
        to: userEmail, // Email penerima (email user)
        subject: 'Congratulations! You have received a gift!',
        text: `You have received a gift: ${giftVarian}. Enjoy!`, // Isi email
    };
    console.log(userEmail);
    return transporter.sendMail(mailOptions);
};

module.exports = {
    sendGiftEmail,
};
