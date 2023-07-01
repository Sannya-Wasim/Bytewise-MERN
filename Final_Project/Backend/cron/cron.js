const User = require("../models/User");
const config = require("../config/config");
const nodemailer = require("nodemailer");
const cron = require("node-cron");

const fs = require("fs");
const path = require("path");

const sendMailToUsers = async (emailObj) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: config.emailUser,
      pass: config.emailPassword,
    },
  });

  const htmlPath = path.join(__dirname, "cronText.html");
  const htmlContent = fs.readFileSync(htmlPath, "utf8");

  const mailOptions = {
    from: "Mithoo Inc.",
    to: Array.isArray(emailObj) ? emailObj.join(", ") : emailObj,
    subject: "Monthly Pet Watch: Missing and Stolen Pets Report",
    html: htmlContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Mail has been sent:", info.response);
    }
  });
};

const sendCustomMail = () => {
  try {
    cron.schedule("0 0 1 * *", async () => {
      // The cron expression "0 0 1 * *" means it will run at 1:00 AM on the 1st day of every month.
      const users = await User.find({});
      if (users.length > 0) {
        const emails = [];
        users.map((user) => {
          emails.push(user.email);
        });
        sendMailToUsers(emails);
        // console.log(emails)
      }
    });
  } catch (error) {
    throw new Error();
  }
};

module.exports = { sendCustomMail };
