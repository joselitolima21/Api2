const express = require('express');
const actCon = require('../controllers/actCon') 

const router = express.Router();

router.get('/',actCon.get);

router.post('/',actCon.post);

router.put('/:id',actCon.put);

router.delete('/:id',actCon.delete);

module.exports = router;