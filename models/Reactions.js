const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId:{type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),}, 
    reactionBody:{type: String,
        required: true, 
        maxLength: 280,},  
    username:{type: String,
        required: true}, 
    createdAt:{type: Date, 
                default: Date.now}
}, 
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



const handleError = (err) => console.error(err); 

Reaction.create(
    {}, 
    (err) => (err ? handleError(err): console.log('Created new document'))
    );

module.exports = reactionSchema;