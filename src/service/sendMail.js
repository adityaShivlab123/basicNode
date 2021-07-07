// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey("d81ae015d51842ad910ff4935c85c159");
// const msg = {
//     to: "adi.purohit1834@gmail.com",
//     from: "outdoorkings1@gmail.com", // Use the email address or domain you verified above
//     subject: "Sending with Twilio SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// //ES6
// sgMail.send(msg).then(
//     () => {},
//     (error) => {
//         console.error(error);

//         if (error.response) {
//             console.error(error.response.body);
//         }
//     }
// );
// //ES8
// export {sgMail};