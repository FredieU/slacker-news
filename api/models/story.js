const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: String,
  url: String,
  submitter: String,
  date_submitted: { type: Date, default: Date.now },
  points: Number,
  comments: Array
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;