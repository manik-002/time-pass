const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

//const Admin = require('../models/admin.js');
const UserModel = require('../models/User.js');

//database connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

async function createAdminAccount() {
  try{
    const existingAdmin = await UserModel.findOne({email : "admin@test.com"});
    if (!existingAdmin) {
      const newAdmin = new UserModel({
        email : "admin@test.com",
        name: "admin",
        password : await bcrypt.hash("admin",10),
        role :1,
      });

      await  newAdmin.save();
      console.log("admin account created successfully.");

    } else {
      console.log("admin already exist.");
      
    }
  } catch(error){
    console.error(error.message);
  }

}

module.exports = createAdminAccount ; 