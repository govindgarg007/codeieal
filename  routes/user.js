const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers');

router.get('/profile',userController.home);

router.get('/signUp',userController.signUp);
router.get('/signIn',userController.signIn);

router.post('/create',userController.create);
router.post('/create-session',userController.createSession);
module.exports=router;
