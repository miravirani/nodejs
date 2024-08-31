import express from 'express'

import{ userCreationCon, userGetDataAll} from '../../controllers/UserCreationCon.js'
import userValidationMW from '../../MiddleWare/userValidationMW.js'
import userDisbandMW from '../../MiddleWare/userDisbandMW.js'
import userAuthMW from '../../MiddleWare/userAuthMW.js'
import mockApi from '../../Controllers/mockApi.js'

const userApis = express.Router()

userApis.post("/create",userValidationMW, userCreationCon)

userApis.get('/data/all',userAuthMW, userGetDataAll)

userApis.post("/api/data", mockApi)

userApis.get("/single/:id", userDisbandMW, (req, res) => {
    try {
        
    } catch (error) {
        
    }
})
export default userApis