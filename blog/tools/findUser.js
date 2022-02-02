const User = require("../models/user");

// const findUser = async (obj) => {
//   try {
//     console.log("hello from findUser");
//     const user = await User.findOne({ username: obj.username.trim() });
//     console.log(user);
//     return user;
//   } catch (e) {
//     console.log("error - findUser" , e);
//     return res.render("register", { msg: "Somthing went wrong" });
//   }
// };

const findUser = async (username) => {
  try {
    console.log("hello from findUser");
    console.log(username);
    const user = await User.findOne({ username: username.trim() });
    console.log(user);
    return user;
  } catch (e) {
    console.log("error - findUser" , e);
    return res.render("register", { msg: "Somthing went wrong" });
  }
};

module.exports = findUser;
