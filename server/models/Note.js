const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    date: {
      type: Number
    },
    noteData: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,ref:'User'
    },
  }
);

const User = model('Note', noteSchema);

module.exports = Note;