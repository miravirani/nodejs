import mongoose from "mongoose";
import { createHashKey } from "../Services/hashing.js";
import { saltRoundConfigvar } from "../Configuration/basicConfiguration.js";

let userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            default: 'abc',
            unique: true
        },
        
        mobileNumber: Number,
        email: String,
        password: {
            type: String,
            required: true,
        },
        cpassword: String
    })

userSchema.pre("save", async function (next) {

    console.log("password befor ==", this.password);
    this.password = await createHashKey(this.password, saltRoundConfigvar)
    this.password = await createHashKey(this.cpassword, saltRoundConfigvar)
    console.log("password aft ==", this.password);

    next()
})
const userModel = mongoose.model("users", userSchema)

export default userModel;