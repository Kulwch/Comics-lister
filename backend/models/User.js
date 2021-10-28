const mongoose = require('mongoose');
const sanitizer = require('mongoose-sanitize');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    pseudo: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    localisation: { type: String, required: false },
    age: { type: Number, required: false },
    gender: { type: String, required: false },
    preferences: { type: String, required: false },
    isAdmin: { type: Boolean, required: true },
    willingToSell: { type: Boolean, required: true },
    willingToExchange: { type: Boolean, required: true },
    imageUrl: { type: String, required: false}
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(sanitizer);

module.exports = mongoose.model('User', userSchema);