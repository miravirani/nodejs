const passwordVerify = (password) => {

    if ((password.length <= 8)) {
        return { isvalid: false, reason: "minimum length 8 char" }
    }

    if ((password.length >= 20)) {
        return { isvalid: false, reason: "maximum length 20 char" }
    }

    if ((password.search(/[a-z]/)) === -1) {
        return { isvalid: false, reason: "heven't any lowercase char" }
    }

    if ((password.search(/[A-Z]/)) === -1) {
        return { isvalid: false, reason: "heven't any uppercase char" }
    }

    if ((password.search(/([0-9])\w+/g)) === -1) {
        return { isvalid: false, reason: "heven't any number" }
    }

    if ((password.search(/\W|_/g)) === -1) {
        return { isvalid: false, reason: "heven't any special char" }
    }

    return { isvalid: true }
}

export default passwordVerify;