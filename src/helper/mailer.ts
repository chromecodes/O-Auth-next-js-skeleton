import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

import fs from "fs";
import path from "path";

export const sendMail = async (
  email: string,
  username: string,
  verifyToken: string
) => {
  try {
    const emailTemplatePath = path.join(
      process.cwd(),
      "src/emailTemplates/VerifyEmail.html"
    );
    let htmlTemplate = fs.readFileSync(emailTemplatePath, "utf8");
    htmlTemplate = htmlTemplate.replace("{{username}}", username);
    const verificationLink = `${process.env.DOMAIN}/auth/verify?token=${verifyToken}`;
    htmlTemplate = htmlTemplate.replace("{{verifyLink}}", verificationLink);
    var transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NODEMAILER_AUTH_USER,
        pass: process.env.NODEMAILER_AUTH_PASS,
      },
    });

    const mailOptions = {
      from: "hi@demomailtrap.com",
      to: email,
      subject: "Verification email",
      html: htmlTemplate,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (message: any) {
    throw new Error(error.message);
  }
  // Looking to send emails in production? Check out our Email API/SMTP product!
};
