const {Schema, model} = require('mongoose');
const Thought = require('./Thoughts');

const userSchema = new Schema({
    username:{type: String,
        required: true 
    }, 
    email:{type:String,
        required: true}, 
    thoughts:[
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ]
}, 
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  });

const User = model('User', userSchema);



module.exports = User;