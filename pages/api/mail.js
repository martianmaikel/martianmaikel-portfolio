const express = require('express');
const rateLimit = require('express-rate-limit');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();

// Rate Limiting - Erlaubt maximal 5 Anfragen pro Minute von einer IP-Adresse
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 Minute
  max: 5, // Maximale Anzahl von Anfragen
  message: 'Zu viele Anfragen von dieser IP, bitte versuchen Sie es später erneut.',
});

app.use(limiter);

// Endpoint für das Senden von E-Mails
app.post('/api/mail', async (req, res) => {
  try {
    // Deine E-Mail-Verarbeitungslogik hier

    // Beispiel: E-Mail an SendGrid senden
    const body = JSON.parse(req.body);
    const data = {
      to: 'maikel.szy@gmail.com',
      from: body.email,
      replyTo: body.email,
      subject: `[martianmaikel.dev - Kontakt] : ${body.subject}`,
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
    };

    // Logge die IP-Adresse
    const clientIP = req.headers['x-real-ip'] || req.connection.remoteAddress;
    console.log(`E-Mail-Anfrage von IP: ${clientIP} mit E-Mail: ${body.email}`);

    await sgMail.send(data);

    res.status(200).json({ error: false, message: 'E-Mail erfolgreich gesendet' });
  } catch (error) {
    res.status(500).json({ error: true, message: 'Fehler beim Senden der E-Mail' });
  }
});

module.exports = app;
