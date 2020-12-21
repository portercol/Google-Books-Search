// require mongoose package
const mongoose = require('mongoose');

// create function to set up connection to mongoDB
async function db() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todo_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log('successfuly connected to db');
  } catch (error) {
    console.log('error connecting to db: ');
    console.log(error);
  }
}

// export db out of db.js
module.exports = db;