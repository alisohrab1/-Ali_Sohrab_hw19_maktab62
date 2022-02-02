const User = require("../models/user");

const updateUser = async (req, res) => {
    try {
        console.log("hello from updateUser");
        console.log(req.body);

        const filter = { username: req.body.userId };
        const update = {
          username: req.body.username,
          password: req.body.password,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          gender : req.body.gender
        };
      
        await User.findOneAndUpdate(filter, update);
        res.send("user updated!")

    }
    catch(e){
        console.log("error - updateUser" , e);
        return res.send("something went wrong")
    }
 
};


module.exports = updateUser;