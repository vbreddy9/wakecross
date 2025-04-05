const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const requestIp = require('request-ip');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors({
  origin: "https://wakecross.britishelderlycare.com", // Replace with your frontend domain
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(requestIp.mw());

// ✅ Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'info@britishelderlycare.com', // Your Gmail
    pass: 'ojyj rdit vbpf bkpi',         // Gmail App Password
  },
});

// ✅ Test Route
app.get('/', (req, res) => {
  res.send('Backend is running for Elderly Care Dental Appointments');
});

// ✅ Email Submission Endpoint
app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, phoneNumber, dob, referralSource } = req.body;
  const fullName = `${firstName} ${lastName}`;
  const userIp = req.clientIp;

  // Admin Email Content
  const adminMailOptions = {
    from: `"${fullName}" <${email}>`,
    to: 'info@britishelderlycare.com',
    replyTo: email,
    subject: 'New Registration - Dental Appointment Request',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <div style="background-color: #182033; color: white; padding: 10px; text-align: center;">
          <h2>New Dental Appointment Registration</h2>
        </div>
        <div style="padding: 20px;">
          <table style="width: 100%; font-size: 14px;">
            <tr><td><strong>Full Name:</strong></td><td>${fullName}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
            <tr><td><strong>Phone Number:</strong></td><td>${phoneNumber}</td></tr>
            <tr><td><strong>Date of Birth:</strong></td><td>${dob}</td></tr>
            <tr><td><strong>Referral Source:</strong></td><td>${referralSource || 'Not provided'}</td></tr>
            <tr><td><strong>User IP:</strong></td><td>${userIp || 'Not Available'}</td></tr>
          </table>
        </div>
        <div style="background-color: #182033; color: white; padding: 10px; text-align: center;">
          <p>&copy; 2024 Wake Cross Family Dentistry</p>
        </div>
      </div>
    `,
  };

  // Send Admin Email
  transporter.sendMail(adminMailOptions, (error, info) => {
    if (error) {
      console.error('❌ Error sending to admin:', error);
      return res.status(500).json({ message: 'Failed to send email to admin', error });
    }

    console.log('✅ Admin Email Sent:', info.response);

    // Auto-reply to Client
    const clientMailOptions = {
      from: `"Wake Cross Family Dentistry" <info@britishelderlycare.com>`,
      to: email,
      subject: 'Thank You for Registering - Dental Appointment',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <div style="background-color: #182033; color: white; padding: 10px; text-align: center;">
            <h2>Thank You for Scheduling an Appointment!</h2>
          </div>
          <div style="padding: 20px;">
            <p>Dear ${firstName},</p>
            <p>Thank you for registering for a dental appointment with <strong>Wake Cross Family Dentistry</strong>. Our team will contact you shortly.</p>
            <p><strong>Your Submitted Info:</strong></p>
            <ul>
              <li><strong>Name:</strong> ${fullName}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone:</strong> ${phoneNumber}</li>
              <li><strong>DOB:</strong> ${dob}</li>
              <li><strong>Referral:</strong> ${referralSource || 'Not Provided'}</li>
            </ul>
            <p>If you have any questions, feel free to call us at 
              <strong><a href="tel:+19194530777" style="color: inherit; text-decoration: none;">(919)-453-0777</a></strong>.
            </p>
            <p>Warm regards,<br><strong>Wake Cross Family Dentistry</strong></p>
          </div>
          <div style="background-color: #182033; color: white; padding: 10px; text-align: center;">
            <p>&copy; 2025 Wake Cross Family Dentistry</p>
          </div>
        </div>
      `,
    };

    transporter.sendMail(clientMailOptions, (error, info) => {
      if (error) {
        console.error('❌ Auto-reply Error:', error);
        return res.status(500).json({ message: 'Failed to send auto-reply', error });
      }

      console.log('✅ Auto-reply Sent:', info.response);
      res.status(200).json({ message: 'Emails sent successfully' });
    });
  });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
