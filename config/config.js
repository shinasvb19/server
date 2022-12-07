const mongoose = require("mongoose");

// const User = require('./models/userSchema');
// mongoose.connect('mongodb://localhost:27017/strider', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('connected mongoose');
//     })
//     .catch(err => {
//         console.log("OH NO MONGO CONNECTION ERROR!!!!")
//         console.log(err)
//     })
const config = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shinasvb1998:shareef123456@strider.5nabb2p.mongodb.net/auth?retryWrites=true&w=majority"
    );
    console.log("connetcted");
  } catch (err) {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
    process.exit();
  }
};
module.exports = config;
