const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const requestIp = require("request-ip");

const app = express();
const PORT = 5000;

// Allow only frontend domain (no trailing slash!)
app.use(cors({
  origin: "https://wakecross.vercel.app",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
}));

app.use(bodyParser.json());
app.use(requestIp.mw());

// Health check route
app.get("/home", (req, res) => {
  console.log("GET /home: Health check");
  res.status(200).json("Backend working");
});

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "info@vr2tech.in",
    pass: "qxsj qqwd puhd aznj", // App password
  },
});

// Format phone number with +1
const formatPhoneNumber = (number) => {
  const cleaned = number.replace(/\D/g, "");
  return cleaned.startsWith("1") ? `+${cleaned}` : `+1${cleaned}`;
};

// Main form submission route
app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, phoneNumber, dob, referralSource } = req.body;
  const formattedPhone = formatPhoneNumber(phoneNumber);
  const userIp = req.clientIp || req.ip || "IP not available";

  // Admin Email
  const adminMailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`,
    to: "info@vr2tech.in",
    subject: "New Appointment Request",
    html: `
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.1); font-family:Arial, sans-serif; color:#333;">
              <tr>
                <td style="background-color:#0077b6; padding:20px; text-align:center;">
                  <h2 style="color:#ffffff; margin:0; font-size:22px;">🦷 New Appointment Request</h2>
                </td>
              </tr>
              <tr>
                <td style="padding:24px;">
                  <ul style="list-style:none; padding:0; margin:0; font-size:15px; line-height:1.6;">
                    <li><strong style="color:#0077b6;">Full Name:</strong> ${firstName} ${lastName}</li>
                    <li><strong style="color:#0077b6;">Email:</strong> ${email}</li>
                    <li><strong style="color:#0077b6;">Phone:</strong> ${formattedPhone}</li>
                    <li><strong style="color:#0077b6;">Date of Birth:</strong> ${dob}</li>
                    <li><strong style="color:#0077b6;">Referral Source:</strong> ${referralSource || 'N/A'}</li>
                    <li><strong style="color:#0077b6;">IP Address:</strong> ${userIp}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style="background-color:#e0f1f9; text-align:center; padding:16px; font-size:13px; color:#555;">
                  <p style="margin:0;">Please follow up this lead as earliest.</p>
                  <p style="margin:4px 0 0;">Wakecross Family Dentistry &copy; ${new Date().getFullYear()}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `,
  };

  transporter.sendMail(adminMailOptions, (err) => {
    if (err) {
      return res.status(500).json({ message: "Error sending to admin", error: err });
    }

    // Auto-reply Email
    const clientMailOptions = {
      from: '"Wakecross Family Dentistry" <info@vr2tech.in>',
      to: email,
      subject: "Thank You for Your Appointment Request",
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.1); font-family:Arial, sans-serif; color:#333;">
                <tr>
                  <td style="background-color:#2e86c1; padding:20px; text-align:center;">
                    <h2 style="color:#ffffff; margin:0; font-size:22px;">Wakecross Family Dentistry</h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px; font-size:15px; line-height:1.6;">
                    <p>Dear ${firstName},</p>
                    <p>Thank you for reaching out to <strong>Wakecross Family Dentistry</strong>. We’ve received your appointment request and will be in touch shortly.</p>
                    <p><strong>Phone:</strong> ${formattedPhone}</p>
                    <p>If your request is urgent, please call us at 
                      <a href="tel:+101902921475" style="color:#2e86c1; text-decoration:none;">+1 0190 292 1475</a>.
                    </p>
                    <br/>
                    <p>Warm regards,<br/><strong>Wakecross Family Team</strong></p>
                  </td>
                </tr>
                <tr>
                  <td style="background-color:#eaf3fb; text-align:center; padding:16px; font-size:13px; color:#555;">
                    <p style="margin:0;">This is an automated message. Please do not reply to this email.</p>
                    <p style="margin:4px 0 0;">&copy; ${new Date().getFullYear()} Wakecross Family Dentistry</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
    };

    transporter.sendMail(clientMailOptions, (err) => {
      if (err) {
        return res.status(500).json({ message: "Auto-reply failed", error: err });
      }
      res.status(200).json({ message: "Email sent to admin and client" });
    });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
