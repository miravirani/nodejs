import mongoose from "mongoose";
import { configDotenv } from 'dotenv';
configDotenv();

const dbPort = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const name = process.env.DB_NAME;
const data = process.env.DB_DATA;

mongoose.connect(`${dbPort}://${user}:${password}@${name}/${data}`)
    .then(() => {
        console.log("Database successfully connected...");
    })
    .catch((error) => {
        console.log("ERROR: ", error);
    });

