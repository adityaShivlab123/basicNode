import { UserRegirster } from "../../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {sendSms} from '../service/otp.js';
const userRegister = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const createUser = await UserRegirster.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
        });
        const saveUser = await createUser.save();
        if (!saveUser) {
            res.status(400).send({
                status: 400,
                message: "User Registration Failed!!",
            });
            console.log(password);
            console.log(findUser.password);
        } else {
            // sgMail()
            res.status(200).send({
                status: 200,
                message: "User Registration Successful!!",
                data: createUser,
            });
        }
    } catch (error) {
        console.log("error Catched", error);
        res.status(400).send({ status: 400, message: error.message });
    }
};

const logUser = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const findUser = await UserRegirster.findOne({
            where: { email: email },
        });
        if (!findUser) {
            res.status(400).send({
                status: 400,
                message: "User Not Found!!",
                data: {},
            });
        } else {
            const isMatch = await bcrypt.compare(password, findUser.password);
            if (!isMatch) {
                res.status(400).send({
                    status: 400,
                    message: "Please enter valid password",
                });
            } else {
                const payload = {
                    firstName: findUser.firstName,
                    lastName: findUser.lastName,
                    email: findUser.email,
                    password: findUser.password,
                };
                const phone = +917285069535;
                const message = "welcomeMessage"
                const token = jwt.sign(payload, "secret key");
                sendSms(phone, message);
                // console.log(sendOtp);
                res.status(200).send({
                    status: 200,
                    message: "User Logged in successfully!!",
                    data: { token: token },
                });
            }
        }
    } catch (error) {
        res.status(400).send({
            status: 400,
            message: error.message,
            
        });
    }
};

const allUser = async (req, res) => {
    try {
        const allUsers = await UserRegirster.findAll();
        if (!allUsers) {
            res.status(400).send({
                status: 400,
                message: "Sorry!! no users founded!!!",
            });
        } else {
            res.status(200).send({
                status: 200,
                message: "user founded ",
                data: allUsers,
            });
        }
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message });
        console.log(error);
    }
};


export { userRegister, logUser, allUser };

// d81ae015d51842ad910ff4935c85c159
