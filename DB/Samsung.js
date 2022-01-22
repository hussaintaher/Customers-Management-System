const { model , Schema} = require('mongoose')

const samsungSchema = new Schema({
    samsung: String
    }, 
    {
        timestamps: true,
    })

module.exports = model('samsung', samsungSchema);