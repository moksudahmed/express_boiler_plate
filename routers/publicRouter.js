const express = require("express");
const publicRouter = express.Router();

publicRouter.get("/public", (req,res)=>{    
    res.send("Welcome to public page")
    res.end();    
});

publicRouter.get("/public/user", (req,res)=>{    
    res.send("Welcome to public user page")
    res.end();    
});


module.exports = publicRouter;

