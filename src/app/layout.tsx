import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/ui/components/header";

/*style*/
//import '@/app/globals.css';
import "@/ui/styles/main.scss";
import "@/app/home.scss";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Occitanie Évasion | Canyoning , escalade , spéléologie , via corda  en Occitanie. ",
  description:
    "Moniteur indépendant , je vous accompagne découvrir les plus beaux sites de canyoning , escalade , spéléologie et via corda en Occitanie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
