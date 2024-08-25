const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error in connecting db'));

db.once('open',function(){
    console.log("Congrats db connected");
})

module.exports = db;