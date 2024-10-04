const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
    const authHeaders = req.headers['authorization'];
    const token = authHeaders && authHeaders.split(' ')[1];

    if(!token) res.status(401).json({error: 'No token provided'});

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if(err){
            return res.status(403).json('Failed authenticate token');
        }

        req.user = decode;
        next();
    });
};

module.exports = authenticate;