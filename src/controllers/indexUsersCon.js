const Users = require('../models/Users');

exports.get = async (req,res,next) => {
    const data = await Users.find({
        gerency: req.params.gerency
    }).catch(error=> res.status(200).send({message: error.message}) )
    res.status(200).send(data);
};