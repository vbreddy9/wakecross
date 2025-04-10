const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const requestIp = require("request-ip");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(requestIp.mw());

// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "info@britishelderlycare.com",
    pass: "ojyj rdit vbpf bkpi", // App password
  },
});

// Format phone number to start with +1
const formatPhoneNumber = (number) => {
  const cleaned = number.replace(/\D/g, "");
  if (!cleaned.startsWith("1")) return `+1${cleaned}`;
  return `+${cleaned}`;
};

// Basic route
app.get("/home", (req, res) => {
  res.status(200).json("Backend working for Elderly Care form");
});

// Main submission route
app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, phoneNumber, dob, referralSource } = req.body;

  const formattedPhone = formatPhoneNumber(phoneNumber);
  const userIp = req.clientIp;

  // Email to Admin
  const adminMailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`,
    to: "info@britishelderlycare.com",
    subject: "New Appointment Request",
    html: `
      <h2>New Form Submission</h2>
      <ul>
        <li><strong>Full Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${formattedPhone}</li>
        <li><strong>Date of Birth:</strong> ${dob}</li>
        <li><strong>Referral Source:</strong> ${referralSource || 'N/A'}</li>
        <li><strong>IP Address:</strong> ${userIp || 'Unavailable'}</li>
      </ul>
    `,
  };

  transporter.sendMail(adminMailOptions, (err, info) => {
    if (err) {
      return res.status(500).json({ message: "Error sending to admin", error: err });
    }

    // Auto-reply to client
    const clientMailOptions = {
      from: '"British Elderly Care" <info@britishelderlycare.com>',
      to: email,
      subject: "Thank You for Your Appointment Request",
      html: `
        <p>Dear ${firstName},</p>
        <p>Thank you for reaching out to British Elderly Care. We’ve received your appointment request and will be in touch shortly.</p>
        <p><strong>Phone:</strong> ${formattedPhone}</p>
        <p>If your request is urgent, please call us at <a href="tel:+101902921475">+1 0190 292 1475</a>.</p>
        <br />
        <p>Warm regards,<br/>British Elderly Care Team</p>
      `,
    };

    transporter.sendMail(clientMailOptions, (err, info) => {
      if (err) {
        return res.status(500).json({ message: "Auto-reply failed", error: err });
      }
      res.status(200).json({ message: "Email sent to admin and client" });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
