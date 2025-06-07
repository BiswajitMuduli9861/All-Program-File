import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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