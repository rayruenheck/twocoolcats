// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER,
    port: parseInt(process.env.EMAIL_PORT || '465', 10),
    secure: process.env.EMAIL_PORT === '465', // Use true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const verifyCaptcha = async (token: string) => {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
        method: 'POST',
    });
    const data = await response.json();
    return data.success;
};

export async function POST(request: Request) {
    const data = await request.json();
    
    const captchaValid = await verifyCaptcha(data.captcha);
    if (!captchaValid) {
        return NextResponse.json({ message: 'Invalid CAPTCHA' }, { status: 400 });
    }
    
    // Prepare the email data
    const mailData = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Change this to the recipient's email
        subject: `Contact Form Submission from ${data.name}`,
        text: `Message from ${data.name} (${data.email}):\n\n${data.message}`,
        html: `<p>Message from <strong>${data.name}</strong> (${data.email}):</p><p>${data.message}</p>`,
    };

    try {
        await transporter.sendMail(mailData);
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}
