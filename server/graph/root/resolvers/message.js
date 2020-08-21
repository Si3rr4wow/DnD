const rfr = require('rfr')

const { models: { Message } } = rfr('./mongoose')

exports.getMessageResolver = async ({ _id }) => {
  const message = await Message.findById(_id)
  if (!message) {
    throw new Error('no message exists with id ' + _id);
  }
  return message.toObject();
}

exports.createMessageResolver = async ({ input }) => {
  const message = new Message(input)
  await message.save()
  return message.toObject();
}

exports.updateMessageResolver = async ({ _id, input }) => {
  const message = await Message.findById(_id)
  if (!message) {
    throw new Error('no Message exists with id ' + _id);
  }
  message.set(input)
  await message.save()
  return message.toObject();
}
