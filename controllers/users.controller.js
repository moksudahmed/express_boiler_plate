const users = require("../models/users.model");
const path = require("path");

exports.getUser = (req, res) =>{
    res.sendFile(path.join(__dirname + "/../views/index.html"));    
}

exports.createUser = (req , res) =>{
    console.log(req.body);
    const {name, age } = req.body;
    const id = users.length + 1;
    const user = {id,
        name,
        age}        
    users.push(user);
    res.status(201).json({
        success : true,
        users,
    });    
}


