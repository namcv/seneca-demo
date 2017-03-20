'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        index: {unique: true}
    },
    firstName: String,
    lastName: String
}, {
    timestamps: true
});
userSchema.index({firstName: 'text', lastName: 'text'});

/**
 * @class
 * @type {Model<T>}
 */
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
