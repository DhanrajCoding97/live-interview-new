// // layout.js
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { UserProvider } from "./UserContext";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <UserProvider>{children}</UserProvider>
//       </body>
//     </html>
//   );
// }

// layout.js
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./redux/Provider";
import Head from "@/components/Head";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full bg-black">
      <Head />
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
