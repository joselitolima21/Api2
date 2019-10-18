const Users = require('../models/Users');

exports.get = async (req,res,next) => {
    const { username } = req.headers

    const data = await Users.find({username});

    if (!data[0]){
        res.status(200).send({message: 'user not exist'});
    }
    else{
    message = data[0]
    res.status(200).send({message});
    }
};