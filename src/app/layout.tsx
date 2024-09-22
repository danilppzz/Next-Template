import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import ProviderContainer from "@/components/ProviderContainer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Template",
  description: "Next Templace description.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ProviderContainer>
          {children}
        </ProviderContainer>
      </body>
    </html>
  );
}
