const {
    User
} = require('../models')
const {
    comparePassword
} = require('../helpers/bcrypt')
const {
    generateToken
} = require('../helpers/jwt')

class UserController {
    static register(req, res, next) {
        console.log("MASUK REGISTER")
        let {
            email,
            password
        } = req.body
        User.create({
                email,
                password
            })
            .then(data => {
                res.status(201).json({
                    id: data.id,
                    email: data.email
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static async login(req, res, next) {
        console.log("MASUK LOGIN")
        console.log(req.body.email, req.body.password)
        try {
            let {
                email,
                password
            } = req.body
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if (!user) throw {
                msg: 'invalid email or password',
                status: 400
            }
            let comparePass = comparePassword(password, user.password)
            if (!comparePass) throw {
                msg: 'invalid email or password',
                status: 400
            }
            let payload = {
                id: user.id,
                email: user.email
            }
            let token = generateToken(payload)
            res.status(200).json({
                token
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController