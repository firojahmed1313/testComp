import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "First Next App",
  description: "next app testing with",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <header>
        <Header/>
      </header>
      <main>{children}</main>
      <footer>
        <Footer/>
      </footer>
      </body>
      
    </html>
  );
}
