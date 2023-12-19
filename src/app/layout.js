import { Poppins } from "next/font/google";
import "./globals.css";
import Aside from "./components/Aside";
import Nav from "./components/Nav";
import styles from "@/app/components/NavBar.module.css";
import {Toaster} from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"],weight:['200','300','700','900'] });

export const metadata = {
  title: "Reservas App",
  description: "Application where we can do reserve",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav />
        <div className="w-full h-screen flex">
          <Aside />
          <div className={styles.fondochildren}>{children}</div>
        </div>
        <Toaster
          
        />
      </body>
    </html>
  );
}
