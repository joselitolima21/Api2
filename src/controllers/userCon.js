const Users = require('../models/Users');

exports.get = async (req,res,next) => {
    const data = await Users.find({});
    res.status(200).send(data);
};

exports.post = async (req,res,next) => {
    const { username } = req.body;

    let user = await Users.findOne({ username: username });

    if (!user) {
        user = await Users.create(req.body);
    }
    return res.status(201).json(user);
};

exports.put = async (req,res,next) => {
    let id =  req.params.id
    //const user = await Users.findOneAndUpdate({_id: id},{});
    return res.status(200).json({message: 'no updates are currently supported'});
};

exports.delete = async (req,res,next) => {
    let id =  req.params.id
    const user = await Users.findOneAndDelete({_id: id});
    const { _id } = user;
    return res.status(200).json({message: `user ${_id} deleted`});
};