import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ApolloWrapper from "./ApolloWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Employee Directory",
  description: "Next.js + Apollo + Tailwind Employee Directory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
<ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
