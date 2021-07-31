const cron = require ('node-cron')
const express = require('express')
const nodemailer = require('nodemailer')

app = express()

let transporter = nodemailer.createTransport({
    host: "your_test_email_smtp_host",
    port: "your_test_email_port" ,
    auth: {
        user: "your_test_email",
        pass: "your_test_email_password"
    },
});

// Sending emails every Monday.
//more help on crontab.tech
cron.schedule('0 0 * * 1', function() {
    console.log('--------Running Email Cron Job-------------');
    console.log('Sending email...');
  
    let messageOptions = {
      from: 'your_test_email_address',
      to: 'another_test_email@test.com',
      subject: 'Test Email Subject',
      text: 'Test message message'
    };
  
    transporter.sendMail(messageOptions, function(error, info) {
      if (error) {
        throw error;
      } else {
        console.log('Scheduled Email has been successfully sent');
      }
    });
  });
  
app.listen(4000)