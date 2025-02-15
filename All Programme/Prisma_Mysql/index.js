import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//function declaration
const main =async()=>{
    //Create (Insert Data)
    //Single User
    // const user = await prisma.user.create({   //by do be schema.prisma me table name || User || hoga to Database me show karega || user ||
    //     data:{
    //         name:"Sanjukta Muduli",
    //         email:"sanjukta@gmail.com",
    //     },
    // })
    // console.log(user)


    //Multiple User

    // const users = await prisma.user.createMany({
    //     data:[
    //         {
    //             name:"Labanyabati Muduli",
    //             email:"labanyabati@gmail.com",
    //         },
    //         {
    //             name:"Abhijit Muduli",
    //             email:"abhijit@gmail.com",
    //         }
    //     ]
    // })
    // console.log(users)


    //Read (Fetch Data)
    //Get All Users
    // const users = await prisma.user.findMany(); // find all data
    // const users = await prisma.user.findFirst(); // find only first data
    // console.log(users)


    // Get a Single User by ID
    // const users = await prisma.user.findUnique({   //find Unique id
    //     where:{id : 4}
    // })
    // console.log(users)


}

// main() is function and call
main().catch((error)=>{
    console.error(error);
}).finally(async()=>{
    await prisma.$disconnect();
})