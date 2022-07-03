const { v4: uuidv4} = require("uuid");

const users = [
    {   
        id: uuidv4(), 
        name:"Moksud Ahmed", 
        email:"moksud@gmail.com",
        password : "123123"
    },
    {   
        id: uuidv4(), 
        name:"Fuad Ahmed",
        email: "fahmed@gmail.com", 
        password : "121333"
    },
];

module.exports = users;


