
import "./globals.css";

export const metadata= {
  title:{
   default: "User ka About Page",
   template: "%s | Biswajit Muduli",
  },
  description:"This is the nextjs programe",
  authors:[{name:"Muna Muduli"},{name:"Kuna Muduli"}],
  keywords:["nextjs","reactjs","Fullstack Developer"]
}


const RootLayout = ({children})=>{
  return(
    <html className="hydrated"  foxified="">
      <body>
        <h1>hellow</h1>
       
        {children}
      </body>
    </html>
  )
}
export default RootLayout;