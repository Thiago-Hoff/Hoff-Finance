import MenuItem from "../MenuItem/MenuItem";

export default function Header() {
  return (
    <div className="flex flex-row justify-between w-full h-16 gap-4">
      <div className="flex items-center justify-center h-full w-96 bg-jet rounded-e-2xl">
        <h1 className="text-3xl text-white">Hoff Finance</h1>
      </div>

      <div className="flex items-center justify-center w-full h-full px-16 py-3 rounded-l-2xl rounded-br-2xl bg-jet ">
        <MenuItem />
      </div>
    </div>
  );
}
