import { saltRoundConfigvar } from "../Configuration/basicConfiguration.js";
import userModel from "../Models/userModel.js"
import { createHashKey } from "../Services/hashing.js";

const userCreationCon = async (req, res) => {
    try {

        // const hashedPassword = await createHashKey(req.body.password, saltRoundConfigvar)

        // const dataPrepare = new userModel({ ...req.body, password: hashedPassword, cpassword: hashedPassword })

        const dataPrepare = new userModel(req.body)

        const savedData = await dataPrepare.save()

        console.log("saved data ==", savedData);

        res.status(201).send({
            status: 201,
            massage: "created successfully",
            data: savedData
        })
    } catch (error) {
        res.status(404).send({
            error: 'error'
        })
    }
}

const userGetDataAll = async (req, res) => {
    try { 
        const getData = await userModel.find({email: req.body.email})
        
        res.status(200).send({
            status: 200,
            data: getData
        })
    } catch(error) {

    }
}

export {userCreationCon, userGetDataAll}