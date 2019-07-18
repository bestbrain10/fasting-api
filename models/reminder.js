const {
  Schema
} = require('mongoose');

module.exports = new Schema({
  description: String,
  time: Date,
  action: [{
    actionType: {
      type: String,
      enum: ['complete', 'snooze', 'cancel']
    },
    actionTime: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// action