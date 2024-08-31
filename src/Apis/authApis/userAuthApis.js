import experss from 'express'
import authControllers from '../../Controllers/authControllers.js';
import userValidationMW from '../../MiddleWare/userValidationMW.js'

const userAuthApis = experss.Router()

userAuthApis.post('/login', userValidationMW, authControllers)

export default userAuthApis;