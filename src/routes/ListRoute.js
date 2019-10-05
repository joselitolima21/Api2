const express = require('express');
const listCon = require('../controllers/listCon') 

const router = express.Router();

router.get('/:id',listCon.get);

module.exports = router;