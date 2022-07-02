const express = require("express");
const adminRouter = require("./routers/adminRouter");
const publicRouter = require("./routers/publicRouter");

const app = express();

const router = express.Router();

const authentication = (req,res,next) =>{    
    console.log("This is a authentication middleware");
    next();
};


app.use(router);
app.use(publicRouter);


router.get("/", authentication ,(req,res)=>{
    res.send("Welcome from Home Page");
    res.end();
})

// All the admins roots are checkd by authentications middleware 

app.use(authentication);
app.use(adminRouter);




module.exports = app;
