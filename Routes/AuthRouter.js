const { signup, login } = require('../controllers/Authcontroller.js');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation.js');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;