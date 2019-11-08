const express = require('express');
const router = express.Router();

const { getAll, getById } = require('controllers/user');
const auth = require('middleware/auth');
const Role = require('utils/role');

// @route   GET api/users
// @desc    Test Route
// @access  Private
router.get('/', auth(Role.Admin), getAll);

// @route   GET api/users/:id
// @desc    Test Route
// @access  Private
router.get('/:id', auth(), getById);

module.exports = router;
