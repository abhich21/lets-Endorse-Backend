const mongoose = require('mongoose');
require('dotenv').config();

const connect = () => {
return mongoose.connect("mongodb+srv://abhi_123:1234@cluster0.s0zyj.mongodb.net/test");

}

module.exports = connect;
