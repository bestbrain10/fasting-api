const {
  Schema,
  ...mongoose
} = require('mongoose');

const userSchema = new Schema({
  username: String,
  gender: {
    type: String,
    enum: ['male', 'female'],
    lowercase: true
  },
  login: [{
    date: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema);