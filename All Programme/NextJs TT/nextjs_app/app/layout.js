import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../component/Navigation";

const RootLayout = ({children})=>{
  return(
    <html className="hydrated"  foxified="">
      <body>
        <h1>hellow</h1>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
export default RootLayout;