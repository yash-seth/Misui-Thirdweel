import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isSeller: user.isSeller,
            seller: {
                role: {
                    isOwner: user.isOwner,
                    isManager: user.isManager,
                    isStaff: user.isStaff,
                }
            }
        },
        process.env.JWT_SECRET || 'somethingsecret',
        {
            expiresIn: '30d',
        }

    )
}

//user authorization
export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
        jwt.verify(
            token,
            process.env.JWT_SECRET || 'somethingsecret',
            (err, decode) => {
                if (err) {
                    res.status(401).send({ message: 'Invalid Token' });
                } else {
                    req.user = decode;
                    next();
                }
            }
        );
    } else {
        res.status(401).send({ message: 'No Token' });
    }
};

//seller authorization as an owner
export const isOwner = (req, res, next) => {
    if (req.user && req.user.isSeller && req.user.seller.role.isOwner) {
        next();
    } else {
        res.status(401).send({ message: 'Invalid Owner Token' });
    }
};

//seller authorization as a manager
export const isManager = (req, res, next) => {
    if (req.user && req.user.isSeller && req.user.seller.role.isManager) {
        next();
    } else {
        res.status(401).send({ message: 'Invalid Manager Token' });
    }
};

//seller authorization as a staff
export const isStaff = (req, res, next) => {
    if (req.user && req.user.isSeller && req.user.seller.role.isStaff) {
        next();
    } else {
        res.status(401).send({ message: 'Invalid Staff Token' });
    }
};

//authorization for the person who is owner of a store and also an admin
export const isAdmin = (req, res, next) => {
    if (req.user && req.user.seller.role.isOwner && req.user.isAdmin) {
        next();
    } else {
        res.status(401).send({ message: 'Invalid Admin Token' });
    }
};

//authorization for the person who is owner or manager of a store or an admin
export const isOwnerOrManagerOrAdmin = (req, res, next) => {
    if (req.user && req.user.seller.role.isOwner || req.user.seller.role.isOwner || req.user.isAdmin) {
        next();
    } else {
        res.status(401).send({ message: 'Invalid Store Owner or Admin Token' });
    }
};