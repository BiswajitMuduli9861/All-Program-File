const connection = require("./connection")
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

            /***** CREATE DATABASE *****/

// console.log(connection.execute(`create database employeeDB`));

            /***** CREATE TABLE *****/
// console.log(connection.execute(`create table employee(
//         id int auto_increment primary key,
//         name varchar(100) not null,
//         email varchar(100) not null unique
//     )`));

app.use(bodyParser.json());


             /***** INSERT DATA *****/    

app.post("/employeedata", (req,res)=>{
    console.log("Hii")
    const emp = req.body;
    console.log(emp.name)
    const empData = [emp.name,emp.email]

    // connection.query(`INSERT INTO employee(name,email) values(?)`, [empData], (error,data)=>{
    connection.query(`INSERT INTO employee(name,email) values(?,?)`,empData, (error,data)=>{
        if(error)
            console.log(error);
        else
            console.log(data);
            res.send(data);
    })   
})
                /***** GET ALL DATA *****/

    app.get("/employeedata", (req,res)=>{
        connection.query(`SELECT * FROM employee`, (error,data)=>{
            if(error)
                console.log(error);
            else
                console.log(data);
                res.send(data);
        })
    })

                /***** GET ONE USER DATA *****/

    app.get("/employeedata/:id",(req,res)=>{
        // console.log(req.params)
        const id = req.params.id
        connection.query(`SELECT * FROM employee WHERE id =?`, [id],(error,data)=>{
            if(error){
                console.log(error)
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    })



                /***** UPDATE DATA USING PATCH *****/

        app.patch("/employeedata",(req,res)=>{
            
            const emp = req.body;
            connection.query(`UPDATE employee SET ? WHERE id = ${emp.id}`,[emp],(error,data)=>{
                if(error)
                    console.log(error);
                else
                    res.send(data);
            })
        })


                /***** UPDATE DATA USING PUT *****/


                app.put("/employeedata",(req,res)=>{
            
                    const emp = req.body;
                    connection.query(`UPDATE employee SET ? WHERE id = ${emp.id}`,[emp],(error,data)=>{
                        if(error)
                            console.log(error);
                        else{
                            if(data.affectedRows ==0){
                                const empData = [emp.name,emp.email]
                                connection.query(`INSERT INTO employee(name,email) values(?)`,[empData], (error,data)=>{
                                    if(error)
                                        console.log(error);
                                    else
                                        console.log(data);
                                            res.send(data);
                                })  
                            }
                            else{
                                res.send(data)
                            }
                        }
                            
                    })
                })

                /***** DELETE DATA *****/

    app.delete("/employeedata/:id",(req,res)=>{
        const id = req.params.id
        console.log(id)
        connection.query(`DELETE FROM employee WHERE id=?`,[id],(error,data)=>{
            if(error){
                console.log(error)
            }else{
                // console.log(data);
                res.send(data);
            }
        })
    })
app.listen(5000,()=>{
    console.log("Listing the port number 5000")
})
