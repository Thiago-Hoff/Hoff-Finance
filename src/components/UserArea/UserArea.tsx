import { CaretDown } from "@phosphor-icons/react/dist/ssr";

export default function UserArea() {
  return (
    <div className={`relative flex gap-2 items-center`}>
      <div className="rounded-full w-7 h-7 bg-red-400 "></div>

      <p>Thiago Hoff</p>

      <CaretDown />
    </div>
  );
}
