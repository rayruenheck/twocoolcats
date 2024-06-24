interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const sendContactForm = async (data: ContactFormData) => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept : "application/json"
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to send contact form');
    }

    return response.json();
};
