
function yearValidMW(req, res, next){
    try {
        if (req.body["year"] >= (new Date()).getFullYear()) {
            console.log("if in if middlewere");   
            // res.send("error");
        }
    next()
    } catch (error) {
        console.log("error");
    }
   
}

export default yearValidMW;