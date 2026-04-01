"use client";

import {
  Show,
  SignIn,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Authenticated, Unauthenticated } from "convex/react";
import { Bell, Mail, MessageSquare, User } from "lucide-react";

const NavBar = () => {
  // const user = await auth();
  // console.log({ user });

  return (
    <header className="p-6 fixed z-10">
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
        <div>
          {/* <Show when="signed-out">
            <SignInButton mode="modal" />
            <SignUpButton mode="modal">
              <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show> */}
          <Authenticated>
            <UserButton />
          </Authenticated>
          <Unauthenticated>
            <SignInButton />
          </Unauthenticated>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
