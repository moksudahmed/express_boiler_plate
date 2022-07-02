const express = require("express");
const publicRouter = express.Router();

publicRouter.get("/api/public", (req,res)=>{    
    res.send("Welcome to public page")
    res.end();    
});

publicRouter.get("/api/public/user", (req,res)=>{    
    res.send("Welcome to public user page")
    res.end();    
});


module.exports = publicRouter;

