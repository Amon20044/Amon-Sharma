import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, organization, services, message } = req.body;

      

      const { data } = await resend.emails.send({
        from: email,
        to: 'amonsharma2000@gmail.com',
        subject: services,
        html: <div>
        <p>Dear Amon,</p>
        <p>I hope this message finds you well. Below are the details of my inquiry:</p>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Organization:</strong> {organization}</p>
        <p><strong>Services Required:</strong> {services}</p>
        <p><strong>Message:</strong></p>
        <p>{message}</p>
        <p>Thank you for your attention to this matter. I look forward to your response.</p>
        <p>Best regards,</p>
        <p>{name}</p>
      </div>,
      });

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
