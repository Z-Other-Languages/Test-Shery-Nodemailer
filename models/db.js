const mongoose = require('mongoose');

exports.connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI);
        console.log("DB Conected");
        // console.log("DB Conected", conn.connection.host);
    } catch (err) {
        console.error(err.message);        
    }
}