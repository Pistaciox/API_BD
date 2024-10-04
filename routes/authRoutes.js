const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const uploads = require('../middlewares/multerMidlleware');

router.post('/register', uploads.single('photo'), authController.register);
router.post('/login', authController.login);

module.exports = router;
