# Email Form Setup Instructions for Rotax Engineering

## 📧 How to Enable Contact Form Email Delivery

Your website contact form is ready to send emails directly to `sales.rotaxengineering@gmail.com`. To activate it, follow these simple steps:

### Step 1: Create a Formspree Account
1. Go to https://formspree.io/
2. Sign up with your email address (use `sales.rotaxengineering@gmail.com`)
3. Verify your email address

### Step 2: Create a New Form
1. Click "New Form" in your Formspree dashboard
2. Name it "Rotax Engineering Contact Form"
3. Set the email to: `sales.rotaxengineering@gmail.com`
4. Copy the Form ID (it looks like: `xpznvkqr`)

### Step 3: Update the Website
1. Open the file: `src/components/ContactForm.jsx`
2. Find line 8 that says: `const [state, handleSubmit] = useForm("YOUR_FORM_ID");`
3. Replace `"YOUR_FORM_ID"` with your actual Form ID from Step 2
4. Example: `const [state, handleSubmit] = useForm("xpznvkqr");`

### Step 4: Test the Form
1. Save the file and refresh your website
2. Fill out the contact form with test information
3. Submit the form
4. Check your email at `sales.rotaxengineering@gmail.com`

## ✅ What This Does:
- All contact form submissions will be sent directly to your email
- You'll receive the sender's name, email, phone, company, and message
- The reply-to address will be set to the sender's email for easy responses
- Free for up to 50 submissions per month (upgradeable if needed)

## 💡 Alternative Options:
If you prefer not to use Formspree, you can also:
- Use EmailJS (requires more setup)
- Use your hosting provider's contact form service
- Set up a server-side email handler

## 🆘 Need Help?
If you need assistance with the setup, contact your web developer or Formspree support.
