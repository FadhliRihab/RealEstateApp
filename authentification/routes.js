const express = require('express');
const { isAuth } = require('./middleWare/isAuth');
const { registerValidator, validation, loginValidator } = require('./middleWare/validation');
const { Register, Login,  UpdateUserProfile, DeleteUserProfile } = require('./userControllers');

const router = express.Router();

// Registration route
router.post('/', registerValidator, validation, Register);

// Login route
router.post('/login', loginValidator, validation, Login);

// Get current user profile route
router.get('/current', isAuth, (req,res)=>res.send({ user: req.user }));

// Update user profile route
router.put('/update', isAuth, UpdateUserProfile);

// Delete user profile route
router.delete('/delete', isAuth, DeleteUserProfile);

module.exports = router;
