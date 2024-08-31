import { emailValidator } from "../Services/emailValidator.js"
import passwordVerify from "../services/passwordverify.js"

const userValidationMW = (req, res, next) => {
    try {
        
        const emailVerification = emailValidator(req.body.email)

        if (!emailVerification.isValid) {
            res.status(400).send({
                status: 400,
                message: "user not created",
                error: emailVerification.reason
            })
                
            return
        }
        if (!(req.body.password === req.body.cpassword)) {
            res.status(400).send({
                status: 400,
                message: "password is not same"
            })

            return
        }

        const passverification = passwordVerify(req.body.password)

        if (!(passverification.isvalid)) {
            res.status(400).send({
                status: 400,
                meassage: "user not created DD",
                error: passverification.reason
            })

            return
        }

        next()
    } catch (error) {
        res.send({
            message: 'user validation middlewere',
            error
        })
    }
}
export default userValidationMW;