const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddlewares');
const upload = require('../middlewares/multerMidlleware');

router.get('/me', authenticate, userController.getMe);
router.put('/update/me', authenticate, upload.single('photo'), userController.updateUser);

module.exports = router;