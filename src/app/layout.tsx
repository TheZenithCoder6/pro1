import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/footer";
import "./globals.css";


export default function RootLayout({children}:{children: React.ReactNode}) {
  return(
    <html lang="eng">
     <body>
       <Navbar />
       {children}
       <Footer />
     </body>
    </html>
  )
}