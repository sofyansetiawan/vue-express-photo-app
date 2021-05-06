const router = require('express').Router()

const photoRouter = require('./photo')
const userRouter = require('./user')

router.get('/', (req, res) => res.status(200).json({ msg: 'Welcome to Photo Server' }))
router.use('/users', userRouter)
router.use('/photos', photoRouter)

module.exports = router