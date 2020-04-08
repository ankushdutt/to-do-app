var mongoose = require("mongoose")
    keys     = require('../config')
mongoose.set('debug', true);

mongoose.connect(keys.mongourl, {useNewUrlParser: true,  useUnifiedTopology: true}, function() {
    console.log("MongoDB Connected")
});

mongoose.Promise = Promise

module.exports.Todo = require("./todo")