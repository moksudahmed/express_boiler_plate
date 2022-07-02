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


app.use(authentication);
app.use(adminRouter);

// Home route
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
})
// Route not found error
app.use((req,res,next)=>{
    res.status(404).json({message: "bed request"})
})

// Server error
app.use((err, req,res,next)=>{
    res.status(500).json({message: "Server error"})
})


router.get("/", authentication ,(req,res)=>{
    res.send("Welcome from Home Page");
    res.end();
})

// All the admins roots are checkd by authentications middleware 





module.exports = app;
