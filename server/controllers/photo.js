const {
  Photo
} = require('../models/index')

class PhotoController {

  static getAllPhotos(req, res, next) {
    Photo.findAll({
        order: [
          ['id', 'ASC']
        ]
      })
      .then(data => res.status(200).json({
        Photos: data
      }))
      .catch(err => next(err))
  }

  static postAdd(req, res, next) {
    const {
      albumId,
      title,
      url,
      thumbnailUrl
    } = req.body
    const photoObj = {
      albumId,
      title,
      url,
      thumbnailUrl
    }

    Photo.create(photoObj)
      .then(data => res.status(201).json({
        Photos: data
      }))
      .catch(err => next(err))
  }

  static postEdit(req, res, next) {
    const inputId = +req.params.id
    const {
      albumId,
      title,
      url,
      thumbnailUrl
    } = req.body
    const photoObj = {
      albumId,
      title,
      url,
      thumbnailUrl
    }

    Photo.update(photoObj, {
        where: {
          id: inputId
        },
        individualHooks: true
      })
      .then(data => res.status(200).json({
        Photos: data
      }))
      .catch(err => next(err))
  }

  static getDeletePhoto(req, res) {
    const inputId = +req.params.id
    Photo.destroy({
        where: {
          id: inputId
        },
        individualHooks: true
      })
      .then(photo => res.status(200).json({
        msg: "deleted"
      }))
      .catch(err => res.render(err))
  }

}

module.exports = PhotoController