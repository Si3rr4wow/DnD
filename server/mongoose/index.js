const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.ObjectId.get(value => {
  if(value && Object.keys(value).every(key => ['_bsontype', 'id'].includes(key))) {
    return value.toString();
  }

  return value
});

exports.models = require('./models')
