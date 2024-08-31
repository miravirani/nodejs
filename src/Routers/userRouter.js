import express from "express"

import userApis from "../Apis/User/userApis.js"
import userAuthApis from "../Apis/authApis/userAuthApis.js"
import userCommonMW from "../middleware/userCommonMW.js"

const userRouter = express.Router()

userRouter.use("/auth", userAuthApis)
userRouter.use("/user", userCommonMW, userApis)

export default userRouter