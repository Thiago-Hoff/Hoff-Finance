"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface NextAuthSessionProviderProps {
  children: ReactNode;
  // session: Session | null;
}

export default function NextAuthSessionProvider({
  children,
}: // session,
NextAuthSessionProviderProps) {
  console.log("aaaa");
  return <SessionProvider>{children}</SessionProvider>;
}
