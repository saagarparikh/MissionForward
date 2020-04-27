const router = require('express').Router();
const mongoose = require('mongoose');
const nodemailer = require('nodemailer')


router.route('/contact-form').post((req, res) =>{
  const user_name = req.body.user_name;
  const user_email = req.body.user_email;
  const user_request = req.body.user_request;

  // Instantiate the SMTP Server
  const smtpTrans = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  })

  const mailOpts = {
    from: user_name,
    to: "fwd.mission@gmail.com",
    subject: 'Contact Form Request',
    text: `${user_name} (${user_email}) says: ${user_request}`
  }
  console.log(user_email);
  const confirmOpts = {
    from: "fwd.mission@gmail.com",
    to: user_email,
    subject: 'Mission Forward - Contact Form Confirmation',
    text: "Thank you for reaching out! Someone from our team will be in contact with you as soon as possible. :)"
  }

  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      console.log(error);
      res.json(error);
    }
  })

  smtpTrans.sendMail(confirmOpts, (error, response) => {
    if (error) {
      console.log(error);
      res.json(error);
    }
  })
  res.json("Email has been sent!");
})

module.exports = router;
