
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require('jsonwebtoken')
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre("save", async function () {
  // console.log(this)
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltround = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltround);
    user.password = hash_password;
  } catch (error) {
    next(err);
  }
});

UserSchema.methods.generateToken = async function(){
    try {
        return JWT.sign(
            {
                userId : this._id.toString(),
                email : this.email,
                isAdmin:this.isAdmi,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:'30d',
            }

        )
    } catch (error) {
        console.log(error)
    }
}

const User = new mongoose.model("User", UserSchema);

module.exports = User;
