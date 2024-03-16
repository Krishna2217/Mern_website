//-------------------**
//*logic for home route*
//--------------------**
const User = require("../models/user-model");

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
    console.log(req.body);
    const { name, email, phone, password } = req.body;
    const emailexist = await User.findOne({ email });
    if (emailexist) {
      return res.status(400).send({ msg: "email alredy exists" });
    }
    await User.create(req.body);
    res.json(req.body);
  } catch (err) {
    console.log(err);
  }
};
// const login = async (req, res) => {
//   try {
//     console.log(req.body);
//     res.status(200).json(req.body);
//   } catch (err) {
//     res.send({ msg: "error occured" });
//     console.log(err);
//   }
// };
module.exports = { home, register };
