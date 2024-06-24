import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service : 'gmail',
    host: 'smtp.gmail.com',
    secure: true, 
    auth: {
        user: process.env.EMAIL_ADMIN,
        pass: process.env.EMAIL_PASS,
    },
});

export async function GET(request: Request) {
    return NextResponse.json({ name: 'John Doe' });
}

export async function POST(request: Request) {
    const data = await request.json();
    
    // Prepare the email data
    const mailData = {
        from: data.email,
        to: process.env.EMAIL_USER, // Change this to the recipient's email
        subject: `Contact Form Submission from ${data.name}`,
        text: `Message from ${data.name} (${data.email}):\n\n${data.message}`,
        html: `<p>Message from <strong>${data.name}</strong> (${data.email}):</p><p>${data.message}</p><p>${data.service}</p>`,
    };

    try {
        await transporter.sendMail(mailData);
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}