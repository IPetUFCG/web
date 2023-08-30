import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import Providers from "./providers";
import AuthProvider from "@/src/context/AuthProvider";

const font = Red_Hat_Display({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "My POC",
  description: "Testing tecnologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={font.className}>
        <AuthProvider>
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
