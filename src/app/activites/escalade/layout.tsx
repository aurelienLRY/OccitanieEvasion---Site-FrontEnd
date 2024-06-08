import { Providers } from './providers';
import Header from '@/ui/components/header';
import '@/app/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}