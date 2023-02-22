import { MdOutlineClose } from "react-icons/md";

export default function FullPageNavBar({setShowFullPage}) {
  return (
    <nav className="justify-between text-lg items-center py-3 border-b border-zinc-300 flex">
      <div className="capitalize">Select your trip</div>

      <div
        onClick={() => setShowFullPage(false)}
        className="w-10 h-10 cursor-pointer hover:bg-zinc-200 hover:dark:bg-zinc-700  active:scale-90 transition-all bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center"
      >
        <MdOutlineClose />
      </div>
    </nav>
  );
}
