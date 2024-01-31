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
import { sidebarLinks } from "@/constants";

function MobileNavLink({
  className,
  href,
  children,
  iconSrc = "",
}: {
  className: string;
  href: string;
  children: React.ReactNode;
  iconSrc?: string;
}) {
  return (
    <SheetClose asChild>
      <Link href={href}>
        <Button className={className}>
          {iconSrc && (
            <Image src={iconSrc} alt={`${href}-icon`} width={20} height={20} />
          )}
          {children}
        </Button>
      </Link>
    </SheetClose>
  );
}

function MobileNavMainLinks() {
  return (
    <section className="flex flex-col w-full gap-2 mt-6">
      {sidebarLinks.map((item) => (
        <MobileNavLink
          href={item.route}
          className="btn-primary w-full rounded p-2 flex flex-row gap-2 dark:text-white dark:hover:bg-cyan-500 hover:bg-slate-400 text-black border-slate-400 border"
          key={item.route}
          iconSrc={item.imgURL}
        >
          {/* <Image src={item.imgURL} alt={item.label} height={20} width={20} /> */}
          {/* <span>{item.label}</span> */}
          {item.label}
        </MobileNavLink>
      ))}
    </section>
  );
}

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

      <SheetContent
        side={"left"}
        className="bg-light-700 dark:bg-dark-400 overflow-x-scroll"
      >
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
            <MobileNavLink
              href="/sign-in"
              className="btn-secondary w-full rounded border p-2 text-primary-500 shadow-primary-500 hover:border-primary-500"
            >
              Login
            </MobileNavLink>

            <MobileNavLink
              href="/sign-up"
              className="btn-secondary w-full rounded p-2 text-black ring-1 ring-slate-600 hover:ring-white dark:text-white dark:ring-cyan-200"
            >
              Register
            </MobileNavLink>

            {/* Login and Sign up Buttons End */}
          </div>
        </SignedOut>

        <MobileNavMainLinks />
      </SheetContent>
    </Sheet>
  );
}
