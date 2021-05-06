const bcrypt = require('bcryptjs')

function hashPass(password) {
    let salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

function comparePassword(password, hashPass) {
    return bcrypt.compareSync(password, hashPass)
}

module.exports = {
    hashPass,
    comparePassword
}