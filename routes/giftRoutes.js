const express = require('express');
const router = express.Router();
const giftController = require('../controllers/giftController');
const authenticate = require('../middlewares/authMiddlewares');

router.post('/create', authenticate, giftController.createGift);

module.exports = router;