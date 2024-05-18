import type { Metadata } from "next";

import Header from "@/ui/components/header";

/*style*/
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Occitanie Évasion | Canyoning , escalade , spéléologie , via corda  en Occitanie. ",
  description: "Moniteur indépendant , je vous accompagne découvrir les plus beaux sites de canyoning , escalade , spéléologie et via corda en Occitanie.",
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
        {children}
        </body>
    </html>
  );
}
