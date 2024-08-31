import jwt from 'jsonwebtoken'

const createJWT = async (payload, alg) => {
    try {
        const secretKey = process.env.JWT_KEY

        const jsonToken = await jwt.sign({...payload}, secretKey, {
            algorithm: alg
        })

        return {status : "success", token: jsonToken}

    } catch (error) {
        console.log("error in jwt method ===", error);
        return{status: "failed", error}
    }
}

const verifyJWT = async (token, alg) => {
    try {
        const secretKey = process.env.JWT_KEY
        const tokenVeriFication = await jwt.verify(token, secretKey, {
            algorithms: alg
        })

        console.log("token method : ", tokenVeriFication);

        return {isValid: true, data: tokenVeriFication}
    } catch (error) {
        return{isValid: false, error}
    }
}

export {createJWT, verifyJWT}