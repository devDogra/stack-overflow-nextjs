import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
          alt="mobile-nav-trigger"
        />
      </SheetTrigger>

      <SheetContent side={"left"} className="bg-light-700 dark:bg-dark-400">
        {/* Mobile Nav Heading Starts */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            alt="devoverflow-icon"
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
          ></Image>
          <p className="h2-bold text-black dark:text-light-900">
            Dev<span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        {/* Mobile Nav Heading Ends */}

        <SignedOut>
          {/* Login and Sign up Buttons Start */}
          <div className="mt-4 flex flex-col gap-2">
            <SheetClose asChild>
              <Link href="/sign-in">
                <Button className="btn-secondary w-full rounded border p-2 text-primary-500 shadow-primary-500 hover:border-primary-500">
                  Login
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/sign-up">
                <Button className="btn-tertiary w-full rounded p-2 text-black ring-1 ring-slate-600 hover:ring-white dark:text-white dark:ring-cyan-200">
                  Register
                </Button>
              </Link>
            </SheetClose>
            {/* Login and Sign up Buttons End */}
          </div>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
}
