const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
//-------------------**
//*logic for home route*
//--------------------**
const home = async (req, res) => {
  try {
    res.send("Hello home from controllers");
  } catch (err) {
    console.log(err);
  }
};

//-------------------**
//*logic for register route*
//--------------------**
const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, phone, password } = req.body;
    const emailexist = await User.findOne({ email });
    if (emailexist) {
      return res.status(400).send({ msg: "email alredy exists" });
    }
    //hash password
    // const saltround = 10;
    // const hash_password = await bcrypt.hash(password,saltround)
    //better way to do this using pre method of userSchema done in usermodel.js

    const userCreated = await User.create({ name, email, phone, password });
    // res.status(201).json({ msg: userCreated });
    //sending data via jsonweb toke

    res.status(201).json({msg:"user created",
    token : await userCreated.generateToken(), 
    userId:userCreated._id.toString()
  })  
  } 
  catch (err) {
    console.log(err);
  }
};

module.exports = { home, register };
