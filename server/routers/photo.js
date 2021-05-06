const PhotoController = require('../controllers/photo')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()
router.use(authentication)

router.get('/', PhotoController.getAllPhotos)
router.post('/add', PhotoController.postAdd)
router.post('/edit/:id', PhotoController.postEdit)
router.get('/delete/:id', PhotoController.getDeletePhoto)

module.exports = router