import express from 'express';
import {userRegister,logUser,allUser} from '../controller/userController.js';
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

const router = express.Router();

router.post("/regirster",userRegister);

router.post("/login",logUser);
router.get("/listUser",allUser);

// router.post("/sms",(req,res)=>{
//   try {
      
//     const twiml = new MessagingResponse();

//     twiml.message('The Robots are coming! Head for the hills!');
  
//     // res.writeHead(200, {'Content-Type': 'text/xml'});
//     res.send(twiml.toString());

//   } catch (error) {
//  res.status(400).send()     
// }
// })
export {router}