"use client";

import InputMont from "@/components/InputMonth/InputMonth";
import { Navbar } from "@/components/Navbar/Navbar";
import UserArea from "@/components/UserArea/UserArea";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={`w-screen h-screen flex`}>
          <Navbar />

          <div className="w-full flex flex-col p-6">
            <div className="w-full h-10 flex items-center justify-end">
              <div className="flex justify-between w-3/5">
                <InputMont />
                <UserArea />
              </div>
            </div>

            <section>{children}</section>
          </div>
        </div>
      </body>
    </html>
  );
}
