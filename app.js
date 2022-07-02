const express = require("express");
const adminRouter = require("./routers/adminRouter");
const publicRouter = require("./routers/publicRouter");

const app = express();

const router = express.Router();

app.use(router);
app.use(adminRouter);
app.use(publicRouter);

// router.all("*", (req,res)=>{
//     console.log("For All ");
// })
router.get("/",(req,res)=>{
    res.send("Welcome from Home Page");
    res.end();
})




module.exports = app;
