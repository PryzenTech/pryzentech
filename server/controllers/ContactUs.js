const { contactUsEmail } = require("../mail/templates/contactFormRes")
const mailSender = require("../utils/mailSender")

// // exports.contactUsmail = async (req, res) => {
// //   const { email, name, message, phoneNo ,service } = req.body
// //   console.log(req.body)
// //   try {
// //     const emailRes = await mailSender(
// //       email,
// //       "Your Data send successfully",
// //       contactUsEmail(email, name, message, phoneNo ,service)
// //     )
// //     console.log("Email Res ", emailRes)
// //     return res.json({
// //       success: true,
// //       message: "Email send successfully",
// //     })
// //   } catch (error) {
// //     console.log("Error", error)
// //     console.log("Error message :", error.message)
// //     return res.json({
// //       success: false,
// //       message: "Something went wrong...",
// //     })
// //   }
// // }
// const { contactUsEmail } = require("../mail/templates/contactFormRes");
// const mailSender = require("../utils/mailSender");

exports.contactUsmail = async (req, res) => {
  // Destructure the fields exactly as they are sent from the frontend
  const { fullName, email, message, service , phoneNo} = req.body;

  // Log the received data for debugging
  console.log("Received contact form data:", req.body);

  // Basic validation (you might want more robust validation with a library like Joi or express-validator)
  if (!fullName || !email || !message || !service || !phoneNo) {
    return res.status(400).json({
      success: false,
      message: "All fields are required. Please provide full name, email, message, and service.",
    });
  }

  try {
    // Send the email using the mailSender utility
    // Ensure your contactUsEmail template function is updated to accept 'fullName' instead of 'name'
    const emailRes = await mailSender(
      email, // Recipient's email (user's email)
      "Your Inquiry to PryzenTech Has Been Received", // Subject for the user
      contactUsEmail(email, fullName, message, service, phoneNo) // Pass all relevant data to the email template
    );

    console.log("Email sent successfully:", emailRes);
    console.log("Email Res ", emailRes)

    return res.status(200).json({
      success: true,
      message: "Your inquiry has been sent successfully! We will get back to you shortly.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending your message. Please try again.",
      error: error.message,
    });
  }
};
