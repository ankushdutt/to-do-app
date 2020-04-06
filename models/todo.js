var mongoose = require("mongoose")

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name Cannot Be Blank!"
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

var Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo