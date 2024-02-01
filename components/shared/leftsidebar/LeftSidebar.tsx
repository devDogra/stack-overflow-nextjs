import React from "react";
import { MobileNavLink as LeftSidebarLink } from "../navbar/MobileNav";
import { sidebarLinks } from "@/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function LeftSidebar() {
  return (
    <>
      {sidebarLinks.map((item) => {
        const component = (
          <LeftSidebarLink
            className="btn-primary w-full rounded p-6 flex flex-row gap-2 dark:text-white dark:hover:bg-cyan-500 hover:bg-slate-400 text-black border-slate-400 border"
            iconSrc={item.imgURL}
            href={item.route}
          >
            <span className="base-bold">{item.label}</span>
          </LeftSidebarLink>
        );

        return item.route == "/profile" ? (
          <SignedIn>{component}</SignedIn>
        ) : (
          component
        );
      })}

      <SignedOut>
        {/* Login and Sign up Buttons Start */}
        <div className="mt-4 flex flex-col gap-2">
          <LeftSidebarLink
            href="/sign-in"
            className="btn-secondary w-full rounded border p-6 text-primary-500 shadow-primary-500 hover:border-primary-500"
          >
            <span className="base-bold">Login</span>
          </LeftSidebarLink>

          <LeftSidebarLink
            href="/sign-up"
            className="btn-secondary w-full rounded p-6 text-black ring-1 ring-slate-600 hover:ring-white dark:text-white dark:ring-cyan-200"
          >
            <span className="base-bold">Register</span>
          </LeftSidebarLink>

          {/* Login and Sign up Buttons End */}
        </div>
      </SignedOut>
    </>
  );
}
