"use client";
import { File, House, List } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { Menu } from "../Menu/Menu";
import { Logo } from "../Logo/Logo";

export const Navbar = () => {
  const Path = usePathname();

  return (
    <>
      <div className={`w-56 h-full bg-[#273343] p-4 flex flex-col`}>
        <Logo />

        <Menu />
      </div>
    </>
  );
};

// 282828
// 0A0A0A
// 1E1E1E
// 0F0F0F
// 1C1C1C
