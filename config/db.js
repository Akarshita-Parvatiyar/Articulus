const mongoose = require('mongoose')

const connectDB = async() => {
    await mongoose.connect(process.env.DATABASE_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    console.log("Database Connected");
} 

module.exports = connectDB