import { Providers } from "./providers";

export default function EscaladeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
