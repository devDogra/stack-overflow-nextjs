import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import ThemeButton from "./ThemeButton";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

export default function Navbar() {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full  gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="sitelogo"
          width={23}
          height={23}
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Overflow</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex gap-4">
        <ThemeButton />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          ></UserButton>
        </SignedIn>
        <MobileNav></MobileNav>
      </div>
    </nav>
  );
}
