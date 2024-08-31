function userCommonMW(req, res, next){
    try {
        console.log("in user common middlewere = ", req.body);
        next()
    } catch (error) {
        res.send({
            from: "userCommonWM",
            error
        })
    }
}
export default userCommonMW;