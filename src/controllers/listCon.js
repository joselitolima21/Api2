const Activities = require('../models/Activities');

exports.get = async (req,res,next) => {
    const data = await Activities.find({
        users_id: req.params.id
    }).catch(error=> res.status(200).send({message: error.message}) )
    res.status(200).send(data);
};