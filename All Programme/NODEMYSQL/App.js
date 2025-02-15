import mysql from 'mysql2/promise'

// 1: to connect mysql server
// 2: we need to create a dadabase
// then we to create a table
// is to perform CRUD operation



                                            //****** 1: to connect mysql server ******//

const db= await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"99387909@35Kuna",
    database:"family",  // pehele mat likna database create karneke bad likna
})
console.log("MySQL Conntected Successfully");


                                        //******2: we need to create a dadabase ******//

// await db.execute(`create database family`)    // again not run this line nahale database dobara create karneke liye kosis karega
// console.log(await db.execute(`show databases`));


                                            //****** then we to create a table *******//

// await db.execute(`
//     CREATE TABLE users(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         username VARCHAR(100) NOT NULL,
//         email VARCHAR(100) NOT NULL UNIQUE
//     );
// `)
// const [table] = await db.execute("show tables");
// console.log(table);

                                //***** is to perform CRUD operation *******//

                        //****** Insert Data ******/
                        
      //** Using Inline Values (Not Recommended) **/

// syntax // insert into users(username,email) values(?,?)

// await db.execute(`
//         insert into users(username,email) values('abhijit','abhijit@gamil.com')
//     `)

      //** Using Prepared Statement Recomended (Best Practice) **/

    // await db.execute(`insert into users(username,email) values(?,?)`,[
    //     "Bhagyabati",
    //     "bhagyabati@gmail.com",
    // ])


                    //****** Insert Multiple Data ******//

    // const values = [
    //     ["Labanyabati", "labanyabati@gmail.com"],
    //     ["Ajaya", "ajaya@gmail.com"],
    //     ["Sanjukta",'sanjukta@gmail.com'],
    //     ["Biswajit", "bmuduli126@gmail.com"],
    // ]

    // db.query(`insert into users(username, email) value ?`,  // jetebela multiple data insert kariba setebele aku || value ? || use kariba and aku use karibani|| value(?) || and || de.query() || use kariba and use karibani || db.execute() ||
    //     [values]
    //  );



                        //****** Read Data ******//

console.log(await db.execute("SELECT * FROM users"))
const [rows] = await db.execute("select username from users limit 6")
console.log(rows)


                        //****** Update ******//
        //*** Syntax ***//
    // update table_name
    // set column1 = value1, column = value2, ...
    // where codition

    // try {
    //     const [rows] = await db.execute("update users set username = 'Bhagyabati' where username='bhagyabati' ");
    //     console.log(rows)
    // } catch (error) {
    //     console.error(error);
    // }


                                //****** OR ******//  RECOMMENDED

         // try {
    //     const [rows] = await db.execute("update users set username = ? where username= ? ", ["Bhagyabati","bhagyabati"]);
    //     console.log(rows)
    // } catch (error) {
    //     console.error(error);
    // }


                     //****** Delete ******//
        //*** Syntax ***//
    // Delete table_name
    // where codition

    // try {
    //     const [rows] = await db.execute("delete from users where username='bhagyabati' ");
    //     console.log(rows)
    // } catch (error) {
    //     console.error(error);
    // }

                                //****** OR ******//


     // try {
    //     const [rows] = await db.execute("delete from users where username= ? ", [Bhagyabati]);
    //     console.log(rows)
    // } catch (error) {
    //     console.error(error);
    // }