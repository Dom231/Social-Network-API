const mongoose = require('mongoose');
const Thought = require('./Thoughts');

const userSchema = new mongoose.Schema({
    username:{type: String,
        required: true 
    }, 
    email:{type:String,
        required: true}, 
    thoughts:[Thought],
    friends:[User.id] 
}, 
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  });

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err); 

User.create(
    {}, 
    (err) => (err ? handleError(err): console.log('Created new document'))
    );

module.exports = User;