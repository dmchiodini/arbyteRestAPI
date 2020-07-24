const jwt = require('../../services/utils/jwt');
const userService = require('../../services/users');
const handleError = require('../../controllers/handleError');

const authenticate = async  (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if(!authorization) {
            res.json({ status: 403, message: "Forbidden "});
        }
        const token = authorization.split(' ')[1]
        const { id } = jwt.verifyToken(token);

        const user = await userService.getById(id);

        if(!user) {
            res.json({ status: 403, message: "Forbidden "});
        }
    } catch (error) {
        handleError(res, error);
    }    

   req.user = user;
   next();
};

module.exports = authenticate;