const { model , Schema} = require('mongoose')

const appleSchema = new Schema({
    apple: String
    }, 
    {
        timestamps: true,
    })

module.exports = model('iphone', appleSchema);