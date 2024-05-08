
const {JWT_SECRET} = require('../config');
const jwt = require('jsonwebtoken');

const authRequest = (req,res,next) => {
    
    const authorization = req.headers['authorization'];
    if(authorization) {
        const token = authorization.split('Bearer ')[1];
        try {
            const username = jwt.verify(token,JWT_SECRET);
            req.body['username'] = username;
            next();
        } catch(err) {
            console.log(err);
            res.json({
                'msg' : 'Unauthenticated request.'
            })
        }
    } else {
        res.json({
            'msg' : 'Unauthenticated request.'
        })
    }
}

module.exports = {
    authRequest
}