const {logEvents} = require('./logger')

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log(err.stack)
    const status = res.statusCode ? res.statusCose : 500 
    res.status(status)
    res.send({message: err.message})

}

module.exports  = errorHandler;