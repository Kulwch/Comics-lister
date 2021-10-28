const mongoose = require('mongoose');
const sanitizer = require('mongoose-sanitize');
const uniqueValidator = require('mongoose-unique-validator');

const comicSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    drawer: { type: String, required: true },
    scenarist: { type: String, required: false },
    genre: { type: String, required: true },
    editor: { type: String, required: false },
    year: { type: Number, required: false },
    topic: { type: String, required: false },
    childFriendly: { type: Boolean, required: true },
    resume: { type: String, required: false },
    prequel: { type: Boolean, required: true },
    sequel: { type: Boolean, required: true },
    imageUrl: { type: String, required: false }
});

comicSchema.plugin(uniqueValidator);
comicSchema.plugin(sanitizer);

module.exports = mongoose.model('Comic', comicSchema);