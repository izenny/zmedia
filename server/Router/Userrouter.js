const router = require('express').Router();
const userController = require('../Controllers/Usercontroller')

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)
router.post('/login',userController.verifyLogin)
router.post('/friendreq/:id',userController.friendReqestsId)
module.exports = router