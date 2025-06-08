import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harold Mzumara Portfolio",
  description: "Junior Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-800 font-sans">
        <Toaster position="top-right" />
        <div className="min-h-screen flex flex-col items-center">
          <header className="w-full p-4 shadow-md bg-gray-100">
            <nav className="flex gap-6 justify-center">
              <Link href="/" className="font-semibold">
                Home
              </Link>
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </header>
          <main className="w-full max-w-4xl px-6 flex-grow flex flex-col items-center">
            {children}
          </main>

          <footer className="w-full p-4 text-center text-sm text-gray-500 border-t mt-10">
            &copy; {new Date().getFullYear()} Harold Mzumara. All rights
            reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
