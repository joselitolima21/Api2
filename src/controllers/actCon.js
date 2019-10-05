const Activities = require('../models/Activities');

exports.get = async (req,res,next) => {
    const data = await Activities.find({});
    res.status(200).send(data);
};

exports.post = async (req,res,next) => {
    const act = await Activities.create(req.body);
    await act.populate('users_id').execPopulate();
    return res.status(201).json(act);
};

exports.put = async (req,res,next) => {
    let id =  req.params.id
    //const user = await Users.findOneAndUpdate({_id: id},{});
    return res.status(200).json({message: 'no updates are currently supported'});
};

exports.delete = async (req,res,next) => {
    let id =  req.params.id
    const act = await Activities.findOneAndDelete({_id: id});
    if(!act){
        return res.status(200).json({message: `activity not exist`});
    }
    const { _id } = act;
    return res.status(200).json({message: `activity ${_id} deleted`});
};