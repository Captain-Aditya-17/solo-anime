const Router = require('express')
const {body} = require('express-validator')
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middleware/auth.middleware')

const router = Router() 

router.post('/register',
    body('email').isEmail().withMessage('email must be valid'),
    body('password').isLength({min: 3}).withMessage('password must be 3 characters long'),
    userController.createUserController
)
router.post('/login',
    body('email').isEmail().withMessage('email must be valid'),
    body('password').isLength({min: 3}).withMessage('password must be 3 characters long'),
    userController.loginController
)

router.get('/profile', authMiddleware.authUser ,userController.profileController)

module.exports = router