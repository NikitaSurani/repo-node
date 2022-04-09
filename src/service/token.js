const jwt = require('jsonwebtoken')

exports.generateToken =  generateToken = (payload) => {
    console.log('object payload', payload);
    return jwt.sign(payload, process.env.JSON_SECRET_KEY)
}


