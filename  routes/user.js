const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers');

router.get('/profile',userController.home);
module.exports=router;
