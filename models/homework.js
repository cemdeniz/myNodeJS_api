const mongoose = require('mongoose');
const { Schema } = mongoose;

const homeworkSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
});

module.exports = mongoose.model('Homework', homeworkSchema);
