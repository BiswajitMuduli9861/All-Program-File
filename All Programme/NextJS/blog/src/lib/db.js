const {user_Name,PASSWORD} = process.env
console.log(user_Name)
console.log(PASSWORD)
export const connectionStr= "mongodb+srv://"+user_Name+":"+PASSWORD+"@cluster0.cvwkho7.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0"
// export const connectionStr = "mongodb://localhost:27017/productDB"
