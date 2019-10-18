const express = require('express');
const validationUserCon = require('../controllers/validationUserCon.js') 

const router = express.Router();

router.get('/',validationUserCon.get);

module.exports = router;