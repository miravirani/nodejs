function verifyPassword(req, res, next) {
    try {
        const userPassword = "mira@242";

        if (req.body["password"] !== userPassword) {
            res.send("Invalid password");
            console.log("Invalid password");
        }

        next()
    } catch (error) {
        console.log("error");
    }
}
export default verifyPassword;