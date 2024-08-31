import { algJsonForJWTConfigVar } from "../Configuration/basicConfiguration.js";
import { verifyJWT } from "../Services/jwtoken.js";


const userAuthMW = async (req, res, next) => {
    try {
        console.log("cookie : ", req.headers);

        let cookieJson = {}

        req.headers.cookie.split("; ").map((val, index) => {

            const keyValyArray = val.split("=")
            cookieJson[keyValyArray[0]] = keyValyArray[1]
        })

        if(!cookieJson.hasOwnProperty("authToken")) {
            res.status(401).send({
                status: 401,
                error:"unauthorised attemp",
                message: 'login required'
            })
        }

        const tokenVerificaion = await verifyJWT(cookieJson.authToken, algJsonForJWTConfigVar.user)

        if (!tokenVerificaion.isValid) {
            res.status(401).send({
                status: 401,
                error: "unauthorised attemp",
                message: "invalid token"
            })
        }

        next()
    } catch (error) {
        console.log(error);
    }
}
export default userAuthMW