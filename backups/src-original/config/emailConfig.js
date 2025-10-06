// EmailJS Configuration for Rotax Engineering
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new email service (Gmail recommended)
// 4. Create an email template with the following variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{phone}} - sender's phone
//    - {{company}} - sender's company
//    - {{message}} - the message content
//    - {{reply_to}} - for easy reply
// 5. Replace the values below with your actual EmailJS credentials

export const emailConfig = {
  serviceID: 'service_rotax', // Replace with your EmailJS service ID
  templateID: 'template_rotax', // Replace with your EmailJS template ID  
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
  toEmail: 'sales.rotaxengineering@gmail.com' // This is where emails will be sent
};

// Example email template for EmailJS:
/*
Subject: New Contact Form Submission from {{from_name}}

Hello Rotax Engineering Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Message:
{{message}}

Please respond to this inquiry promptly.

Best regards,
Rotax Engineering Website
*/
