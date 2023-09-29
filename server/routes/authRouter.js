const router = require('express').Router();

const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/auth/refresh-token', authController.refreshToken);
router.post('/logout', authController.logout);

module.exports = router;
