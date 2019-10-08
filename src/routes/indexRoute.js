const express = require('express');
const indexUsersCon = require('../controllers/indexUsersCon') 

const router = express.Router();

router.get('/:gerency',indexUsersCon.get);

module.exports = router;