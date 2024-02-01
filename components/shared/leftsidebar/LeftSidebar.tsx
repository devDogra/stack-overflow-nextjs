import React from "react";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function LeftSidebarLink({
  href,
  children,
  iconSrc = "",
}: {
  href: string;
  children: React.ReactNode;
  iconSrc?: string;
}) {
  return (
    <Link href={href}>
      <Button className="btn-primary w-full rounded p-6 flex flex-row gap-2  border  border-slate-400 dark:hover:bg-cyan-500 hover:bg-slate-400  ">
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={`${href}-icon`}
            width={20}
            height={20}
            className="invert-colors"
          />
        )}
        <span className="base-bold max-md:hidden text-black dark:text-white ">
          {children}
        </span>
      </Button>
    </Link>
  );
}

function RegisterButton() {
  return (
    <Link href="/sign-up">
      <Button className="btn-primary w-full rounded p-6 flex flex-row gap-2  border  dark:hover:bg-cyan-500 hover:bg-slate-400 border-slate-400 ring-1 ring-slate-600 hover:ring-white dark:ring-cyan-200">
        <Image
          src="/assets/icons/sign-up.svg"
          alt="register-icon"
          width={20}
          height={20}
          className="invert-colors"
        />
        <span className="base-bold max-md:hidden  text-black  dark:text-white ">
          Register
        </span>
      </Button>
    </Link>
  );
}
function LoginButton() {
  return (
    <Link href="/sign-in">
      <Button className="btn-primary w-full rounded p-6 flex flex-row gap-2  border dark:hover:bg-cyan-500 hover:bg-slate-400 border-slate-400  shadow-primary-500 hover:border-primary-500">
        <Image
          src="/assets/icons/account.svg"
          alt="sign-in-icon"
          width={20}
          height={20}
          className="invert-colors"
        />
        <span className="base-bold max-md:hidden dark:text-white   text-primary-500">
          Login
        </span>
      </Button>
    </Link>
  );
}

export default function LeftSidebar() {
  return (
    <>
      {sidebarLinks.map((item) => {
        const component = (
          <LeftSidebarLink href={item.route} iconSrc={item.imgURL}>
            {item.label}
          </LeftSidebarLink>
        );

        return item.route == "/profile" ? (
          <SignedIn>{component}</SignedIn>
        ) : (
          component
        );
      })}

      <SignedOut>
        <div className="mt-4 flex flex-col gap-2">
          <LoginButton />
          <RegisterButton />
        </div>
      </SignedOut>
    </>
  );
}
