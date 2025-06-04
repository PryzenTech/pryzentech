exports.contactUsEmail = (
 email, fullName, message, service, phoneNo
) => {
  return `<!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <title>Contact Form Confirmation</title>
      <style>
          body {
              background-color: #ffffff;
              font-family: Arial, sans-serif;
              font-size: 16px;
              line-height: 1.4;
              color: #333333;
              margin: 0;
              padding: 0;
          }
  
  
          .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              text-align: center;
          }
  
          .message {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 20px;
          }
  
          .body {
              font-size: 16px;
              margin-bottom: 20px;
          }
  
          .cta {
              display: inline-block;
              padding: 20px 30px;
              background-color: #9810fa;
              color: #000000;
              text-decoration: none;
              border-radius: 5px;
              font-size: 16px;
              font-weight: bold;
              margin-top: 20px;
          }
  
          .support {
              font-size: 14px;
              color: #999999;
              margin-top: 20px;
          }
  
          .highlight {
              font-weight: bold;
          }
          a { color: #000000; }
      </style>
  
  </head>
  
  <body>
      <div class="container">
          <a class="cta" href=" ">Pryzen Technologies</a>
          <div class="message">Contact Form Confirmation</div>
          <div class="body">
              <p >Dear ${fullName},</p>
              <p>Thank you for contacting us. We have received your message and will respond to you as soon as possible.
              </p>
              <p>Here are the details you provided:</p>
              <p>Name: ${fullName}</p>
              <p>Email: ${email}</p>
              <p>Service: ${service}</p>
              <p>Phone Number: ${phoneNo}</p>
              <p>Message: ${message}</p>
              <p>We appreciate your interest and will get back to you shortly. </p>
          </div>
          <div class="support">If you have any further questions or need immediate assistance, please feel free to reach
              out to us at <a href="mailto:info.pryzentech@gmail.com">info.pryzentech@gmail.com</a>. We are here to help!</div>
      </div>
  </body>
  
  </html>`
}
