"use client";

import { Header } from "@/components/header/Header";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative w-screen h-screen flex  flex-col md:flex-row
      `}
    >
      <Header />

      {children}
    </div>
  );
}
