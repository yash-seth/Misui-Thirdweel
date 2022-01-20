const jwt = require('jsonwebtoken');

const generateToken = (customer) => {
    return jwt.sign(
        {
            _id: customer._id,
            firstname: customer.firstname,
            lastname: customer.lastname,
            email: customer.email,
        },
        process.env.JWT_SECRET || 'somethingsecret',
        {
            expiresIn: '30d',
        }

    )
}

//customer authorization
const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    console.log(authorization)
    if (authorization) {
        const token = authorization.split(' ')[1]; // Bearer XXXXXX
        // const token = token1.slice(1, -1);
        console.log(token)
        jwt.verify(
            token,
            process.env.JWT_SECRET || 'somethingsecret',
            (err, decode) => {
                if (err) {
                    console.log(err.message)
                    res.status(401).send({ message: 'Invalid Token' });
                } else {
                    req.customer = decode;
                    console.log(req.customer)
                    next();
                }
            }
        );
    } else {
        res.status(401).send({ message: 'No Token' });
    }
};

module.exports = { generateToken, isAuth };