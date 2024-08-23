const mailer = require('nodemailer');

let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mohamedaslam2254@gmail.com',
        pass: 'jsak akeo fgkp leyo'
    }
});
let var1='Aslam';
let mailid=' alifnisha89295@gmail.com';

let mailOptions = {
    from: 'mohamedaslam2254@gmail.com',
    to: mailid,
    subject: 'Test mail',
    text: `Hey I am ${var1}`
};

transporter.sendMail(mailOptions, (err, data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log('Email sent successfully!\nMessage sent: %s',data.messageId)
    }
});