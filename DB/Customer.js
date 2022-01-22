const { model , Schema} = require('mongoose')

const newTaskSchema = new Schema({
  billNum: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: false
  },
  number: {
    type: Number,
    required: false
  },
  receiver: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: false
  },
  device: {
    type: String,
    required: false
  },
 model: {
    type: String,
    required: false
  },
  theColor: {
    type: String,
    required: false
  }, 
  serial: {
    type: String,
    required: false
  },  
  problem: {
    type: String,
    required: false
  },
  anotherProblem: {
    type: String,
    required: false
  },
  notes: {
    type: String,
    required: false
  },
  procedures: [{
    date: String,
    name: String,
    receiver: String,
  }],
  price: {
    type: Number,
    required: false
  },
  isReady: {
    type: String,
    required: false
  },
  theDate: {
    type: String,
    required: false
  },
  lastDate: {
    type: String,
    required: false
  },
})


module.exports = model('Customer', newTaskSchema);