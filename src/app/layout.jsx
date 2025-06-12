import { Joan, MedievalSharp } from "next/font/google";
import "./globals.css";

const joan = Joan({
  variable: "--font-joan",
  subsets: ["latin"],
  weight:"400"
});

const medievalSharp = MedievalSharp({
  variable: "--font-medieval",
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "Noctia",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${joan.variable} ${medievalSharp.variable}`}>
        {children}
      </body>
    </html>
  );
}
