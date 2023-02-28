const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{}, 
    email:{}, 
    thoughts:{},
    friends:{} 
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