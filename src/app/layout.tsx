import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const Poppinss = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

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
      <body className={Poppinss.className}>
        <div className="bg-eerieBlack w-screen min-h-screen ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
