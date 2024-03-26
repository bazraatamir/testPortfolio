import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bazraa | Personal Portfolio",
  description: "full stack developer with 4 years experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
