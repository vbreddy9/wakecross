const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const requestIp = require("request-ip");

const app = express();

app.use(cors({
  origin: "https://wakecross.vercel.app/",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

app.use(bodyParser.json());
app.use(requestIp.mw());

app.get("/home", (req, res) => {
  console.log("GET /home: Health check");
  res.status(200).json("Server running");
});

// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "info@vr2tech.in",
    pass: "qxsj qqwd puhd aznj", // App password
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
  res.status(200).json("Backend working");
});

// Main submission route
app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, phoneNumber, dob, referralSource } = req.body;

  const formattedPhone = formatPhoneNumber(phoneNumber);
  const userIp = req.clientIp;

  // Email to Admin
  const adminMailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`,
    to: "info@vr2tech.in",
    subject: "New Appointment Request",
    html: `
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.1); font-family:Arial, sans-serif; color:#333;">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#0077b6; padding:20px; text-align:center;">
              <h2 style="color:#ffffff; margin:0; font-size:22px;">🦷 New Appointment Request</h2>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:24px;">
              <ul style="list-style:none; padding:0; margin:0; font-size:15px; line-height:1.6;">
                <li><strong style="color:#0077b6;">Full Name:</strong> ${firstName} ${lastName}</li>
                <li><strong style="color:#0077b6;">Email:</strong> ${email}</li>
                <li><strong style="color:#0077b6;">Phone:</strong> ${formattedPhone}</li>
                <li><strong style="color:#0077b6;">Date of Birth:</strong> ${dob}</li>
                <li><strong style="color:#0077b6;">Referral Source:</strong> ${referralSource || 'N/A'}</li>
                <li><strong style="color:#0077b6;">IP Address:</strong> ${userIp || 'Unavailable'}</li>
              </ul>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#e0f1f9; text-align:center; padding:16px; font-size:13px; color:#555;">
              <p style="margin:0;">Please followup this lead as earlist.</p>
              <p style="margin:4px 0 0;">Wakecross Familty Dentistry &copy; ${new Date().getFullYear()}</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
`,
};

  transporter.sendMail(adminMailOptions, (err, info) => {
    if (err) {
      return res.status(500).json({ message: "Error sending to admin", error: err });
    }

    // Auto-reply to client
    const clientMailOptions = {
      from: '"Wakecross Famlity Dentistry" <info@vr2tech.in>',
      to: email,
      subject: "Thank You for Your Appointment Request",
      html: `
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.1); font-family:Arial, sans-serif; color:#333;">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#2e86c1; padding:20px; text-align:center;">
              <h2 style="color:#ffffff; margin:0; font-size:22px;">Wake Cross Family Dentistry</h2>
            </td>
          </tr>

          <!-- Message Content -->
          <tr>
            <td style="padding:24px; font-size:15px; line-height:1.6;">
              <p>Dear ${firstName},</p>
              <p>Thank you for reaching out to <strong>Wake Cross Family Dentistry</strong>. We’ve received your appointment request and will be in touch shortly.</p>
              <p><strong>Phone:</strong> ${formattedPhone}</p>
              <p>If your request is urgent, please call us at 
                <a href="tel:+101902921475" style="color:#2e86c1; text-decoration:none;">+1 0190 292 1475</a>.
              </p>
              <br/>
              <p>Warm regards,<br/><strong>Wake Cross Family Team</strong></p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#eaf3fb; text-align:center; padding:16px; font-size:13px; color:#555;">
              <p style="margin:0;">This is an automated message. Please do not reply to this email.</p>
              <p style="margin:4px 0 0;">&copy; ${new Date().getFullYear()} Wake Cross Family Dentistry</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
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
