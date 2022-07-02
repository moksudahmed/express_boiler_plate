require("dotenv").config();
const app = require("./app");

const express = require("express");
const bodyParser = require("body-parser");

const server = express();

const PORT = process.env.PORT || 3000;
const IP_ADDRESS = process.env.IP_ADDRESS;


server.use(bodyParser.urlencoded({extended : false}));
server.use(bodyParser.json());

server.use(app);

server.listen(PORT,()=>{
    console.log(`Server is running on ${IP_ADDRESS}:${PORT}`);    
});

