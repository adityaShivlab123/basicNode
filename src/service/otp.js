const accountSid = "ACbdf326a643c2170235909332a59831a4";
const authToken = "a1c0d56ec4087af78f7b5b2b95a0a82c";

const sendSms = (phone, message) => {
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
       body: message,
       from: +12028583568,
       to: phone
     })
    .then(message => console.log(message.sid));
}
export {sendSms};