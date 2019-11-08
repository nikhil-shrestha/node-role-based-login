const express = require('express');
const router = express.Router();

const { auth } = require('controllers/auth');

// @route   GET api/auth
// @desc    Test Route
// @access  Public
router.post('/', auth);

module.exports = router;
