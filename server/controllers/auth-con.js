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
    res.status(500).json({msg:"Internal error occured"})
  }
};

//-------------------**
//*logic for login route*
//--------------------**
const login = async (req,res) => {
  try {
      const { email,password } = req.body;
      const userFound =await User.findOne({email:email})
      if(!userFound){
        return res.status(400).json({msg:"enter valid email"})
      }
      const isPassValid = await bcrypt.compare(password,userFound.password)
      if(isPassValid){
        res.status(200).json({
        msg:"Login Successful",
        token : await userFound.generateToken(), 
        userId:userFound._id.toString()
      })  
      }else{
        return res.status(401).json({msg:"Invalid password"})
      }
  } catch (error) {
      res.status(500).json({msg:"Internal error occured"})
  }
}



module.exports = { home, register,login};
