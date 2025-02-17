import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//function declaration
const main =async()=>{
                                        //*****  Create (Insert Data) *****//
                                        //****Single User ****//


    /*
    const user = await prisma.user.create({   //by do be schema.prisma me table name || User || hoga to Database me show karega || user ||
        data:{
            name:"Sanjukta Muduli",
            email:"sanjukta@gmail.com",
        },
    })
    console.log(user)
    */

                                        //***** Insert Multiple User *****//

    /*
    const users = await prisma.user.createMany({
        data:[
            {
                name:"Labanyabati Muduli",
                email:"labanyabati@gmail.com",
            },
            {
                name:"Abhijit Muduli",
                email:"abhijit@gmail.com",
            }
        ]
    })
    console.log(users)
    */

                                    //***** Read (Fetch Data) *****//
                                    //**** Get All Users ****//

    /*
    const users = await prisma.user.findMany(); // find all data
    const users = await prisma.user.findFirst(); // find only first data
    console.log(users)
    */

                                    //*****  Get a Single User by ID *****/

    /*
    const users = await prisma.user.findUnique({   //find Unique id jo schema me unique fields hoga kebala sia asiba jo unique heinathiba sia asibani
        where:{id : 4}
    })
    console.log(users)
    */

                                    //***** Update (Modify Data) *****//
                                    //**** Update One User ****/

    /*
    const updateUser = await prisma.user.update({
        where: {id:4},            // accept only Unique fields nahale error asiba ||Argument `where` of type UserWhereUniqueInput needs at least one of `id` or `email` arguments. Available options are marked with ?.||
        data:{name:"Abhijit Muduli"}
    })
    */

                                    //***** Update Multiple Users ******//

    /*
    const updateUser = await prisma.user.updateMany({
        where:{name:"Abhijit Muduli"},           // accept unique fields and non-unique fields
        data:{email:"abhijit@gmail.com"}
    })
    console.log(updateUser)
    */

                                        //***** Delete (Remove Data) *****//
                                        //**** Delete One User ****//

    /*
    const deleteUser = await prisma.user.delete({
        where:{id:3}     //or where:[{},{}{}]
    })
    console.log(deleteUser)
    */


                                        //***** Delete Multiple Users *****//

    /*
    const deleteUser = await prisma.user.deleteMany({
        where:[{id:3},{id:"4"},{id:"5"}]      
    })
    console.log(deleteUser)
    */

    
                                    //***** Delete All Users *****//

    /*
    const deleteUser = await prisma.user.deleteMany({})
    console.log(deleteUser)
    */
}

// main() is function and call
main().catch((error)=>{
    console.error(error);
}).finally(async()=>{
    await prisma.$disconnect();
})