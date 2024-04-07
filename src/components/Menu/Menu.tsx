import { ButtonMenu } from "../ButtonMenu/ButtonMenu";
import { MenuItems } from "@/utils/dynamicContent";

export const Menu = () => {
  //
  return (
    <div className={`w-full mt-6 flex flex-col gap-4`}>
      {MenuItems.map((item) => (
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
