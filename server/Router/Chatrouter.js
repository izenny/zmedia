const express =require('express');
const router = express.Router();
const chatController = require('../Controllers/Chatcontroller')

router.get('/',)
router.post('/message', chatController.incomingMessage)
module.exports = router