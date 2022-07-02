const express = require("express");
const { createUser, getUser } = require("../controllers/users.controller");
const adminRouter = express.Router();

adminRouter.get("/admin", (req,res)=>{    
    res.send("Welcome to admin page")
    res.end();    
});


adminRouter.get("/admin/register", getUser);
adminRouter.post("/admin/register",createUser);

adminRouter.get("/admin/user", (req,res)=>{    
    res.send("Welcome to admin user page")
    res.end();    
});


module.exports = adminRouter;

