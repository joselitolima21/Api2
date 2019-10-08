const Users = require('../models/Users');

exports.get = async (req,res,next) => {
    const { username, password } = req.headers

    const data = await Users.find({username});

    if (!data[0]){
        res.status(200).send({message: 'user not exist'});
    }
    const passwordBack = 'gerentesaero2019'
    if(password === passwordBack){
        const message = data[0]
        res.status(200).send({message});
    }
    res.status(200).send({message: 'password wrong'});
};

exports.post = async (req,res,next) => {

    const { username } = req.body;

    let user = await Users.findOne({ username: username });

    if (!user) {
        const user = await Users.create(req.body);
        return res.status(201).json(user);
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