const users = require("../models/users.model");
const path = require("path");

exports.getUsers = (req , res) =>{
    res.status(200).json({
        success: true,
        users
    })
}
 
exports.getUser = (req, res) =>{
    res.sendFile(path.join(__dirname + "/../views/registration.html"));    
}

exports.createUser = (req , res) =>{
    console.log(req.body);
    try{
        const {name, email, password } = req.body;
        const id = users.length + 1;
        const user = {id,
            name,
            email,
            password
        }        
        users.push(user);
        res.status(201).json({
            success : true,
            users,
        });
    }catch(err){
        res.status(500).json(err.message); 
    }
        
}
 
exports.getLogin = (req, res) =>{
    res.sendFile(path.join(__dirname + "/../views/login.html"));    
}
exports.login = (req,res)=>{
    try{
        const {email, password} = req.body;
        //const user = users.find((user)=>user.email === email);
        const result = users.find( (user) => user.email === email );
        // if(user){
        //     res.status(200).json('User Found'); 
        //     console.log(user);
        // }
        
        res.status(200).json('User Found'); 
        console.log(result);   

        
    }catch(err){
        res.status(500).json('User Not Found'); 
    }

}

