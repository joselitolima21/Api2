const mongoose = require('mongoose');

const UsersSchema =  new mongoose.Schema({
    username: { type: String, required: true },
    fullname: { type: String, required: true },
    function: { type: String, required: true },
    gerency: { type: String, required: true }
});

module.exports = mongoose.model("Users", UsersSchema);