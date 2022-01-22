const { model , Schema} = require('mongoose')

const huaweiSchema = new Schema({
    huawei: String
    }, 
    {
        timestamps: true,
    })

module.exports = model('huawei', huaweiSchema);