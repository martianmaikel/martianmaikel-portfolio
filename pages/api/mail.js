const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function mail(req, res) {

  try {
    const body = JSON.parse(req.body);
    const data = {
      to: "maikel.szy@gmail.com",
      from: body.email,
      replyTo: body.email,
      subject: `[martianmaikel.dev - Contact] : ${body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html lang="en">
            <head>
              <meta charset="utf-8">
            
              <title>The HTML5 Herald</title>
              <meta name="description" content="The HTML5 Herald">
              <meta name="author" content="SitePoint">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            
              <link rel="stylesheet" href="css/styles.css?v=1.0">
            
            </head>
            
            <body>
              <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                    </div>
                    <div class="container" style="margin-left: 20px;margin-right: 20px;">
                    <h3>You've got a new mail from ${body.name} (${body.company ? body.company : 'no company'}) from martianmaikel.dev, their email is: ✉️${body.email} </h3>
                    <div style="font-size: 16px;">
                    <p>Message:</p>
                    <p>${body.message}</p>
                    <br>
                    </div>
                    </div>
            </body>
            </html>`,
    }
    await sgMail.send(data).then(() => {
      res.status(200).json({ error: false, message: 'Email sent successfully' });
    }).catch(error => {
      res.status(error.statusCode || 500).send({ error: error.message })
    });


  } catch (error) {

  }
}

export default mail;