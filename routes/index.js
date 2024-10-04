const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const giftRoutes = require('../routes/giftRoutes');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/gift', giftRoutes);

module.exports = router;