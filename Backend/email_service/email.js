const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport(
    {
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "tesztcel@gmail.com",
        pass: "rootadmin!",
      },
      tls:{
        rejectUnauthorized: false,
      },
    }
  );

message = {
    from: "tesztcel@gmail.com",
    to: "",
    subject: "TESZT EMAIL",
    text: "Hello SMTP Email"
};

transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});