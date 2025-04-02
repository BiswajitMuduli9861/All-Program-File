const mysql = require("mysql2");

const mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"99387909@35Kuna",
    database:"employeeDB"
});

mysqlConnection.connect((error)=>{
    if(error)
        console.log(error)
    else
    console.log("Database Connection Successfully"); 
})

module.exports = mysqlConnection