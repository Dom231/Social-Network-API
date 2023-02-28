const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({});

const Reaction = mongoose.model('Reaction', reactionSchema);

const handleError = (err) => console.error(err); 

Reaction.create(
    {}, 
    (err) => (err ? handleError(err): console.log('Created new document'))
    );

module.exports = Reaction;