import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MonthProvider from "@/providers/Months/MonthsProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hoff Finance",
  description: "Web site for finance control",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <MonthProvider>{children}</MonthProvider>
      </body>
    </html>
  );
}
