import SwitchThemeButton from "./SwitchThemeButton";

export default function NavBar() {
  return (
    <div className="fixed w-full left-[50%] max-w-2xl -translate-x-[50%] top-0  z-40">
      <nav className="p-4 flex justify-between items-center">
        <div className="text-xl"></div>

        <SwitchThemeButton />
      </nav>
    </div>
  );
}
