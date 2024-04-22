import { Open_Sans, Work_Sans, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "PashOn",
  description: "The one stop Personalized AI Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen bg-slate-900 text-white`} >{children}</body>
      </html>
    </ClerkProvider>
  );
}
