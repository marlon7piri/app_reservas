import { Inter } from "next/font/google";
import "./globals.css";
import Aside from "./components/Aside";
import Nav from "./components/Nav";
import styles from '@/app/components/NavBar.module.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reservas App",
  description: "Application where we can do reserve",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div className="w-full h-screen flex">
          <Aside />
          <div className={styles.fondochildren}>{children}</div>
        </div>
      </body>
    </html>
  );
}
