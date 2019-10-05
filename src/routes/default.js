const express = require('express');

const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).send({
        title: 'Api - Sol do Equador',
        version: '2.0'
    });
});

module.exports = router;