const mongoose = require('mongoose');

const petsSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    image: {
        type: String,
    }
});

const Pets = mongoose.model('Pets', petsSchema);

module.exports = Pets;
