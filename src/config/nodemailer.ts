// config/nodemailer.ts
import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
  host: "smtp.ionos.com", // IONOS SMTP server
  port: 587, // IONOS SMTP port (587 for TLS)
  secure: false, // Use TLS (secure: false for port 587)
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email, // Sender's email address
  to: email, // Recipient's email address (your email)
};
