import bcrypt from 'bcrypt'

const createHashKey = async (key, saltround) => {

    const hashedKey = await bcrypt.hash(key, saltround)
    return hashedKey
}

const verifyHashKey = async (heshedKey, key) => {
    const verificationflag = await bcrypt.compare(key, heshedKey)
    return verificationflag

}

export {createHashKey, verifyHashKey}