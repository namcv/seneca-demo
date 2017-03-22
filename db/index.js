"use strict";

const db = require('./config');
const users = require('./users');
const profiles = require('./profiles');

module.exports = {
    db: db,
    users: users,
    profiles: profiles
}