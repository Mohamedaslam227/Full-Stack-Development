const nodemailer=require('nodemailer');
require('dotenv').config();
const path = require('path');

const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "alifnisha89295@gmail.com",
      pass: "kupc ojdi gxlv taf",
    },
  });

const mailOptions = {
    from: {
        name:"Aslam",
        address: "alifnisha89295@gmail.com",
    }, // sender address
    to: ["mohamedaslam2254@gmail.com"], 
    subject: "send mail using node mailer and gmail ✔",
    text: " hey aslam how are you",
}

const sendMail=async(transporter,mailOptions)=>{
    try {
        await transporter.sendMail(mailOptions);
        console.log("Sent mail sent!");
    } catch (error) {
        console.error(error);
    }
}


sendMail(transporter,mailOptions);