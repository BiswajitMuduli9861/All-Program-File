import mysql from 'mysql2/promise'

// mysql.createConnection()    //omly single connection create
mysql.createPool({   //createPool()  reusable connection create  and production ke liye recomended kiya gaya hai

     host:"localhost",
     user:'root',
     password:"99387909@35Kuna"

})