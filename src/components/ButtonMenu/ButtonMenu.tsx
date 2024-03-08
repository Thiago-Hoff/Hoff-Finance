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
      className={` w-full h-10 flex items-center gap-3 p-2 rounded-lg hover:bg-[#2A3E59] ${
        Path === menuName && "bg-[#3A4B62]"
      } `}
    >
      <div className="">
        <Icon.IconComponente
          width={Icon.width}
          height={Icon.height}
          color="#96A9BC"
        />
      </div>

      <p className="w-3/5 flex text-[#96A9BC]  ">{label}</p>
    </Link>
  );
};
