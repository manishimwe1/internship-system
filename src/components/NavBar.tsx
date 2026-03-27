import { Bell, Mail, MessageSquare, User } from "lucide-react";

const NavBar = () => {
  return (
    <header className="p-6">
      <nav className="flex items-center justify-between gap-2">
        <div className="border border-slate-400 flex-1 rounded-full">
          <input className=" " />
        </div>
        <div className="flex items-center justify-around gap-2">
          <div className="p-2 rounded-full border border-slate-400">
            <Mail className="size-3" />
          </div>
          <div className="p-2 rounded-full border border-slate-400">
            <Bell className="size-3" />
          </div>
        </div>
        <div className="w-0.5 h-6  border-slate-500" />
        <div className="h-10 w-10 rounded-full border-2 bg-pink-100 flex justify-center items-center">
            <User/>
        </div>
        <h2>json rantin</h2>
      </nav>
    </header>
  );
};

export default NavBar;
