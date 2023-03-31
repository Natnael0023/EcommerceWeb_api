const mongoose = require('mongoose')

const Order = new mongoose.model('Order', mongoose.Schema({
   userId: { 
        type: String,
        required: true,
    },
  product:[ {
    productId:{
        type: String
    },
    quantity:{
        type: Number,
        default: 1
    }
   }
],
amount: {
    type: Number,
    required: true
},
address: {
    type: Object,
    required: true
},
status: {
    type: String,
    default: "pending"
}

},{ timestamps: true}))

module.exports.Order = Order