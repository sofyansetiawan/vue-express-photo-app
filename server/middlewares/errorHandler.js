function errHandler(err, req, res, next) {
    console.log(err, '>>>>>>> dari error handler')
    let errors = []
    let statusCode = 500

    switch (err.name) {
        case 'SequelizeValidationError':
            err.errors.forEach(element => {
                errors.push(element.message)
            });
            statusCode = 400
            break
        case 'JsonWebTokenError':
            errors.push('you are not authorized to do this')
            statusCode = 401
            break
        default:
            errors.push(err.msg)
            statusCode = err.status || statusCode
    }

    console.log(`>>> ERROR`);
    console.log({status: statusCode, errors})
    
    res.status(statusCode).json({
        errors: errors
    })
}

module.exports = errHandler