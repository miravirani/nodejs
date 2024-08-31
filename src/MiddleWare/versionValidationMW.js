function versionValidationMW(req, res, next){
try {
    let version = req.headers.version
    if(version == process.env.VERSION_SERVER_PORT)
        next()
} catch (error) {
    res.status(400).send({
        status: 400,
        error: error
    })
}
}
export default versionValidationMW;