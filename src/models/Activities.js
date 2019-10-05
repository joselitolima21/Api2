const mongoose = require('mongoose');

const ActivitiesSchema =  new mongoose.Schema({
    content: String,
    initial_date: String,
    final_date: String,
    books: [String],
    topics: [String],
    users_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }],
});

module.exports = mongoose.model("Activities", ActivitiesSchema);