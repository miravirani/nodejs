import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors';
import path from 'path'
import dotenv from "dotenv"

dotenv.config()

import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import versionValidationMW from './MiddleWare/versionValidationMW.js';

configDotenv();
const firstNode = express()
firstNode.use(express.json());
const serverPort = process.env.SERVER_PORT;

firstNode.use(cors({
    methods: "*",
    origin: "*",
    allowedHeaders: "*",
    exposedHeaders: "*",
    preflightContinue: true,
}))


firstNode.get("/getfiles", (req, res) => {
    try {
        // let path = req.params.email
        // console.log(email);
        // console.log("first file download");
        const filePath = path.resolve("./src/Assets/photo.jpg")
        res.download(filePath)
        // res.send(email)
    } catch (error) {

    }
})


firstNode.use(versionValidationMW)
firstNode.use(userRouter);
firstNode.use("/v1", productRouter);

firstNode.get("/first/api", (req, res) => {
    console.log("first get api");
    res.send("This is server")
})


firstNode.listen(serverPort, () => {
    console.log(`server is successfully connected port is ${serverPort}`)
});





// firstNode.post("/first/api", yearValidMW, (req, res) => {
//    try {
//     res.send("first post api");
//     console.log("This is server");
//     console.log("post json ==", req.body);

//    } catch (error) {
//     res.send("error");
//    }
// })

// firstNode.post("/first" , verifyEmail, verifyPassword, (req, res) => {
//     try {
//         console.log("succ");
//         res.send("succ")
//     } catch (error) {
//         console.log("error");
//     }
// })

// firstNode.get("/first/api", (req, res) => {
//     console.log("first get api");
//     res.send("This is server")
// })

// console.log(serverPort);
// firstNode.listen(serverPort, () => {
//     console.log(`Hello Node ${serverPort}`)
// });