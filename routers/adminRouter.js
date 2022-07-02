const express = require("express");
const { createUser, getUser, getUsers } = require("../controllers/users.controller");
const adminRouter = express.Router();


adminRouter.get("/api/admin", (req,res)=>{    
    res.send("Welcome to admin page")
    res.end();    
});


adminRouter.get("/api/admin/users", getUsers);
adminRouter.get("/api/admin/register", getUser);
adminRouter.post("/api/admin/register",createUser);

adminRouter.get("/api/admin/user", (req,res)=>{    
    res.send("Welcome to admin user page")
    res.end();    
});


module.exports = adminRouter;

