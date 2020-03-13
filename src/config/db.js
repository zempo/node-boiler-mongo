const mongoose = require("mongoose");
const { MONGO_URI } = require("./globals");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
