const express = require('express');
const userCon = require('../controllers/userCon.js') 

const router = express.Router();

router.get('/',userCon.get);

router.post('/',userCon.post);

router.put('/:id',userCon.put);

router.delete('/:id',userCon.delete);

module.exports = router;