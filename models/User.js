const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

/* UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    const hashPwd = await bcrypt.hash(user.password, 8);
    user["password"] = hashPwd.toString();
  }
  // console.log("Saving password");
  next();
});
 */
const User = mongoose.model("user", UserSchema);
module.exports = User;
