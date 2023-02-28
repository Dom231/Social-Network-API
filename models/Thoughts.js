const mongoose = require('mongoose');
const Reaction = require('./Reactions')

const thoughtSchema = new mongoose.Schema({
    thoughtText:{type:String,
        required: true,
        minLength: 1,
        maxLength: 280,}, 
    CreatedAt:{type: Date}, 
    userName:{type: String,
        required: true}, 
    reactions:[Reaction]
}, 
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  });

const Thought = mongoose.model('Thought', thoughtSchema);

const handleError = (err) => console.error(err); 

Thought.create(
    {}, 
    (err) => (err ? handleError(err): console.log('Created new document'))
    );

module.exports = Thought;