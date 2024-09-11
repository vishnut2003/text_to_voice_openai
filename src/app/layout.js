import { Jost } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: "Text to Voice",
  description: "Generated audio from text",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
