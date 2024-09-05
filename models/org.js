const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrgSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: String,
        trim: true,
        required: [true, 'Number is required'],
    },
    password: {
        type: String,
        required: true,
    },
    role : {
        type : String,
    },
});

const OrgModel = mongoose.model('Orgs', OrgSchema);
module.exports = OrgModel;