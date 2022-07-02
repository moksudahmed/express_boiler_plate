const { v4: uuidv4} = require("uuid");

const users = [
    {   
        id: uuidv4(), 
        name:"Moksud Ahmed", 
        age : 40
    },
    {   
        id: uuidv4(), 
        name:"Fuad Ahmed", 
        age : 39
    },
];

module.exports = users;


