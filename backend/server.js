const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const requestIp = require('request-ip');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(requestIp.mw());

// Setup Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'info@britishelderlycare.com', // Admin Email
    pass: 'ojyj rdit vbpf bkpi', // Use an actual App Password
  },
});

// 📌 Endpoint: Send Contact Form Data to Admin & Client
app.post('/send-email', (req, res) => {
  const {
    name, email, mobile, age, postCode, existingCare, service,
    healthConditions, careTiming, hoursPerDay, daysPerWeek, emergencyContact, fundingSource, livingArrangements, pageUrl
  } = req.body;

  const userIp = req.clientIp;

  // 📩 Admin Email (Lead Notification)
  const adminMailOptions = {
    from: `"${name}" <${email}>`,
    to: 'info@britishelderlycare.com',
    replyTo: email,
    subject: 'New Lead Appointment Request',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <div style="background-color: #182033; color: white; padding: 10px; text-align: center;">
          <h2>New Lead Appointment Request</h2>
        </div>
        <div style="padding: 20px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="background-color: #ffffff;"><td><strong>Name:</strong></td><td>${name}</td></tr>
            <tr style="background-color: #f2f2f2;"><td><strong>Email:</strong></td><td>${email}</td></tr>
            <tr style="background-color: #ffffff;"><td><strong>Mobile:</strong></td><td>${mobile}</td></tr>
            <tr style="background-color: #f2f2f2;"><td><strong>Age:</strong></td><td>${age}</td></tr>
            <tr style="background-color: #ffffff;"><td><strong>Post Code:</strong></td><td>${postCode}</td></tr>
            <tr style="background-color: #f2f2f2;"><td><strong>Existing Care:</strong></td><td>${existingCare}</td></tr>
            <tr style="background-color: #ffffff;"><td><strong>Service:</strong></td><td>${service}</td></tr>
            <tr style="background-color: #f2f2f2;"><td><strong>Health Conditions:</strong></td><td>${healthConditions}</td></tr>
            <tr style="background-color: #ffffff;"><td><strong>Preferred Care Timing:</strong></td><td>${careTiming}</td></tr>
            <tr style="background-color: #f2f2f2;"><td><strong>Hours Care Per Day:</strong></td><td>${hoursPerDay}</td></tr>
            <tr style="background-color: #ffffff;"><td><strong>Days Care Per Week:</strong></td><td>${daysPerWeek}</td></tr>
            <tr style="background-color: #f2f2f2;"><td><strong>Emergency Contact:</strong></td><td>${emergencyContact}</td></tr>
            <tr style="background-color: #ffffff;"><td><strong>Funding Source:</strong></td><td>${fundingSource}</td></tr>
            <tr style="background-color: #f2f2f2;"><td><strong>Living Arrangements:</strong></td><td>${livingArrangements}</td></tr>
            <tr style="background-color: #ffffff;"><td><strong>User IP:</strong></td><td>${userIp || 'Not Available'}</td></tr>
            <tr style="background-color: #f2f2f2;"><td><strong>Page URL:</strong></td><td>${pageUrl || 'Not Provided'}</td></tr>
          </table>
        </div>
        <div style="background-color: #182033; color: white; padding: 10px; text-align: center;">
          <p>&copy; 2024 British Elderly Care</p>
        </div>
      </div>
    `,
  };

  transporter.sendMail(adminMailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email to admin:', error);
      return res.status(500).json({ message: 'Failed to send email to admin', error });
    }

    console.log('Admin Email sent:', info.response);

    // 📩 Auto-Reply to the Client
    const clientMailOptions = {
      from: `"British Elderly Care" <info@britishelderlycare.com>`,
      to: email,
      subject: 'Thank You for Your Inquiry - British Elderly Care',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <div style="background-color: #182033; color: white; padding: 10px; text-align: center;">
            <h2>Thank You for Reaching Out!</h2>
          </div>
          <div style="padding: 20px;">
            <p>Dear ${name},</p>
            <p>Thank you for contacting <strong>British Elderly Care</strong>. We have received your request for care services, and our team will get back to you shortly.</p>
            <p><strong>Summary of Your Request:</strong></p>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Mobile:</strong> ${mobile}</li>
              <li><strong>Age:</strong> ${age}</li>
              <li><strong>Service Requested:</strong> ${service}</li>
            </ul>
            <p>For urgent assistance, call us at <strong><a href="tel:+01902921475" className="text-lg flex items-center hover:text-gray-200">
                    <FaPhoneAlt className="mr-2" /> +01902921475
                  </a></strong>.</p>
            <p>Best regards,</p>
            <p><strong>British ElderCare Team</strong></p>
          </div>
          <div style="background-color: #182033; color: white; padding: 10px; text-align: center;">
            <p>&copy; 2024 British Elderly Care</p>
          </div>
        </div>
      `,
    };

    transporter.sendMail(clientMailOptions, (error, info) => {
      if (error) {
        console.error('Error sending auto-reply email:', error);
        return res.status(500).json({ message: 'Failed to send auto-reply email', error });
      }

      console.log('Auto-reply Email sent:', info.response);
      res.status(200).json({ message: 'Emails sent successfully' });
    });
  });
});

// 📌 Endpoint: Notify Admin When a Visitor Arrives
app.post('/notify-admin', (req, res) => {
  const { ip, city, region, country, browser, referrer, visitTime } = req.body;

  const mailOptions = {
    from: `"British Elderly Care" <info@britishelderlycare.com>`,
    to: 'info@britishelderlycare.com',
    subject: 'New Visitor Alert - British Elderly Care',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <div style="background-color: #182033; color: white; padding: 10px; text-align: center;">
          <h2>New Visitor Alert</h2>
        </div>
        <div style="padding: 20px;">
          <p><strong>Visitor Details:</strong></p>
          <ul>
            <li><strong>IP Address:</strong> ${ip}</li>
            <li><strong>Location:</strong> ${city}, ${region}, ${country}</li>
            <li><strong>Browser:</strong> ${browser}</li>
            <li><strong>Referrer:</strong> ${referrer}</li>
            <li><strong>Visit Time:</strong> ${visitTime}</li>
          </ul>
        </div>
        <div style="background-color: #182033; color: white; padding: 10px; text-align: center;">
            <p>&copy; 2024 British Elderly Care</p>
          </div>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Failed to notify admin', error });
    }
    res.status(200).json({ message: 'Admin notified successfully' });
  });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
