import { ChartLineUp } from "@phosphor-icons/react/dist/ssr";

export function Logo() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 border-b-[3px] border-[#96A9BC] text-[#96A9BC] p-4">
      <ChartLineUp className="w-10 h-10" />

      <h3 className="text-2xl">Hoffin</h3>
    </div>
  );
}
