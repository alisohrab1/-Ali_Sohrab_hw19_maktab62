const User = require('../models/user'); 

module.exports = function() {
    User.findOne({role: 'admin'}, (err, existAdmin) => {
        if (err) {
            return console.log('Somthing went wrong in find exist admin!')
        };

        if (existAdmin) {
            return console.log('Admin already created');
        };

        const ADMIN = new User({
            username: "admin",
            lastName: 'admin',
            firstName: "admin",
            password: "12345678A!",
            phone:"123123123",
            gender:"male",
            role: 'admin'
        });


        ADMIN.save((err, admin) => {
            if (err) {
                return console.log('Somthing went wrong in save admin!')
            };

            console.log("Admin created!");
        })
    })
}