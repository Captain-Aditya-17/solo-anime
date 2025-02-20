const jwt = require("jsonwebtoken")

exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(" ")[1];

        if(!token){
            return res.status(401).send({error: 'please authenticate'})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).send({error: 'please authenticate'})
    }
}