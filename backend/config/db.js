let mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        throw error
    }
}

module.exports = dbConnect