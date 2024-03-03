"use client";
import { File, House, List } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "../Menu/Menu";

export const Navbar = () => {
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);
  const Path = usePathname();

  const buttonHeader = [
    {
      id: 1,
      label: "Home",
      href: "#",
      icon: {
        IconComponente: House,
        width: 30,
        height: 30,
        color: "#fff",
      },
    },
    {
      id: 2,
      label: "Extrato",
      href: "#",
      icon: {
        IconComponente: File,
        width: 30,
        height: 30,
        color: "#fff",
      },
      isActive: Path === "/extrato" ? true : false,
    },
  ];
  return (
    <>
      <div
        className={`relative w-full ${
          showMenuMobile && "h-full"
        } h-auto max-h-screen  bg-[#24282E]  md:w-44 md:h-full`}
      >
        <div className="text-white h-14 flex items-center px-4 gap-16 md:justify-center">
          <List
            width={32}
            height={32}
            className="hover:text-slate-300 md:hidden"
            onClick={() => setShowMenuMobile((prev) => !prev)}
          />
          <p>Hoff Finance</p>
        </div>
        {showMenuMobile && <Menu />}
      </div>
    </>
  );
};

// 282828
// 0A0A0A
// 1E1E1E
// 0F0F0F
// 1C1C1C
