const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
//mongoose.connect('mongodb+srv://soumyasri2245:Soumya22%4034@cluster0.u2ywt3o.mongodb.net/?retryWrites=true&w=majority', {
//mongoose.connect('mongodb+srv://developer786kasif:Coding%40786@e-commerce-api.hjxmryp.mongodb.net/?retryWrites=true&w=majority'  ,  {
mongoose.connect('mongodb+srv://meabhhiii:5%40pandey@cluster0.xju05ij.mongodb.net/?retryWrites=true&w=majority',{
useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;