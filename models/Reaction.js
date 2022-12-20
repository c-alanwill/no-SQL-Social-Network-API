const { Schema, model, Types } = require('mongoose');
const formatDate = require('../utils/formatdate');
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () =>  new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatDate(timestamp),
    },
  },
    {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reactionSchema;