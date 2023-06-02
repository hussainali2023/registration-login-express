const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const clientSchema = new Schema({
    name: {
        type: String
    },
    email:{
        type: String
    }
   
})

const Client = mongoose.model("Client", clientSchema)

module.exports = Client
// export default Client