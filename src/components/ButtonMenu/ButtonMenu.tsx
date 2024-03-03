import { Icon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ButtonMenuProps = {
  label: string;
  href: string;
  Icon: {
    IconComponente: Icon;
    height: number;
    width: number;
    color: string;
  };
};

export const ButtonMenu = ({ label, href, Icon }: ButtonMenuProps) => {
  const Path = usePathname();
  const menuName = `/${label.toLowerCase()}`;

  return (
    <Link
      href={href}
      className={`relative w-full h-10 text-lg text-white border-b-[1px] border-r-[1px] border-[#606569] flex items-center gap-3   ${
        menuName === Path && "font-bold"
      }  hover:bg-[#394a6b] transition-colors `}
    >
      <div
        className={` h-full w-14 flex items-center justify-center border-r-[1px] border-[#8b99a3] ${
          menuName === Path && "bg-[#537ace]"
        }`}
      >
        <Icon.IconComponente
          width={Icon.width}
          height={Icon.height}
          color={Icon.color}
        />
      </div>

      <p className="w-3/5 flex   ">{label}</p>
    </Link>
  );
};
