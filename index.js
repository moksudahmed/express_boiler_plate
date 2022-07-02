require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
// Call App.js file 
const app = require("./app");

const server = express();
const PORT = process.env.PORT || 3000;
const IP_ADDRESS = process.env.IP_ADDRESS;

// For cross browser platform 
server.use(cors());

// Body Parser for get post data 
server.use(bodyParser.urlencoded({extended : false}));
server.use(bodyParser.json());

server.use(app);

// Server Listening
server.listen(PORT,()=>{
    console.log(`Server is running on ${IP_ADDRESS}:${PORT}`);    
});

