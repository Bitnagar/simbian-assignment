import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Simbian Assignment - Shivam Bhatnagar",
    description:
        "This is a demo assignment for Simbian's frontend developer position. Built By Shivam Bhatnagar",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center flex-col items-center`}
            >
                {children}
                <footer className="text-white w-full text-center p-4">
                    <p>
                        Copyright @
                        <a
                            className="text-blue-700"
                            href="https://www.linkedin.com/in/shivambhatnagar01/"
                        >
                            Shivam-Bhatnagar
                        </a>
                        . Usage prohibited.
                    </p>
                </footer>
            </body>
        </html>
    );
}
