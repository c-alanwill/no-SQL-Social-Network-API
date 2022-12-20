const { Schema, model } = require('mongoose');
const formatDate = require('../utils/formatdate');
const reactionSchema = require('./Reaction')

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1, 
      maxlength: 280, 
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatDate(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
    {
      toJSON: {
        getters: true,
      },
    }
  );

  thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  // Initialize our Thought model
  const Thought = model('thought', thoughtSchema);

  module.exports = Thought;
  