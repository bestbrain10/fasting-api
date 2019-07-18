

const {Schema, ...mongoose} = require('mongoose');
const Reminder = require('./reminder');

const fastingSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  startTime: Date,
  endTime: Date,
  reminders: [Reminder],
  complete: Boolean,
  reason: String,
  description: String
},{
  timestamps: true
});

module.export = mongoose.model('Fasting', fastingSchema);
