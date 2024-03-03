import { House, Icon } from "@phosphor-icons/react";
import { ButtonHeader } from "../header/buttonHeader/ButtonHeader";
import { ButtonMenu } from "../ButtonMenu/ButtonMenu";

type ItemMenuProps = {
  id: number;
  label: string;
  href: string;
  icon: Icon;
};

type MenuProps = {
  Item: ItemMenuProps[];
};

export const Menu = () => {
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
      label: "Haaaome",
      href: "#",
      icon: {
        IconComponente: House,
        width: 30,
        height: 30,
        color: "#fff",
      },
    },
  ];
  //
  return (
    <div className={`absolute w-full bg-[#24282E] `}>
      {buttonHeader.map((item) => (
        <ButtonMenu
          key={item.id}
          href={item.href}
          label={item.label}
          Icon={item.icon}
        />
      ))}
    </div>
  );
};
