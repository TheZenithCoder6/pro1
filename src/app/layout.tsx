import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";
import Scroll_Button from "@/components/Cards/Scroll_Button"

import "./globals.css";


export default function RootLayout({children}:{children: React.ReactNode}) {
  return(
    <html lang="en">
     <body className="font-custom">
     
         <Navbar />
         {children}
         <Scroll_Button/>
         <Footer />
      
     </body>
    </html>
  )
}