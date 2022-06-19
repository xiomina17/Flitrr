const {User, validate} = require("../models/users.models");
const bcrypt = require("bcrypt");
const router = require("express").Router();


router.post("/", async(req, res ) => {
    try{
        const{error} =  validate(req.body);
        if(error) {
            console.log(error)
            return res.status(400).send({message: error.details[0].message});
        }
            

        const user = await User.findOne({email: req.body.email});
        if(user)
            return res.status(409).send({message: "User with given email already exists."})

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({...req.body, password: hashPassword}).save();
        res.status(201).send({message: "User created successfully"});
    }catch(error) {
        console.log(error);
        res.status(500).send({message:"Internal Server Error", error});
    }
});

module.exports = router;

// module.exports = (app) =>{
//     app.get("/api/users", User.findAll);
//     app.post("/api/users", User.create);
// }