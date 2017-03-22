'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    phoneNumber: {
        type: String,
        required: true,
        index: {unique: true}
    },
    displayName: {
        type: String,
        required: true
    },
    encryptedPassword: {
        type: String,
        required: false
    },
    salt: {
        type: String,
        required: false
    },
    status: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: false,
        lowercase: true
    },    
    walletAccount: {
        accountType: {
            type: String,
            enum: ['personal', 'business'],
            default: 'personal'
        },
        accountId: {
            type: String,
            required: true
        }
    }
}, {
    timestamps: true
});
profileSchema.index({phoneNumber: 'text'});

/**
 * @class
 * @type {Model<T>}
 */
const profileModel = mongoose.model('Profile', profileSchema);

module.exports = profileModel;
