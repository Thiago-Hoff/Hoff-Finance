import Link from "next/link";

export default function MenuItem() {
  return (
    <div className="flex flex-row items-center justify-center w-3/12 h-full gap-4 hover:ease-in hover:border-2 hover:border-white">
      <Link href={"#"}>Home</Link>
    </div>
  );
}
