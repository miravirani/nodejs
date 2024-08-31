const userDisbandMW = (req, res, next) => {
     try {
          console.log("in user disband middlewere :", req.body);
          next()
          
     } catch (error) {
          res.send({
               from: userDisbandMW,
               error
          })
     }
}
export default userDisbandMW;