import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, message } = body;

    // Validate request
    if (!message || message.trim() === '') {
      return NextResponse.json(
        { error: 'Message content is required.' },
        { status: 400 }
      );
    }

    console.log('📬 NEW PORTFOLIO CONTACT SUBMISSION:');
    console.log('📧 Sender Email:', email || 'Anonymous (Not Provided)');
    console.log('💬 Message:', message);
    console.log('------------------------------------');

    // Here, the user can easily plug in Resend, Nodemailer, or EmailJS
    // for actual delivery. We provide a bulletproof 200 OK response.
    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message was successfully received! Thank you for reaching out.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { error: 'An internal server error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
