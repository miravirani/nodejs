function verifyEmail(req, res, next) {
    try {
        const userEmail = "miravirani439@gmail.com";
        
        if (req.body["email"] !== userEmail) {
            res.send("Invalid Email");
            console.log("Invalid Email");
        }

        next()
    } catch (error) {
        console.log("error");
    }
}
export default verifyEmail;