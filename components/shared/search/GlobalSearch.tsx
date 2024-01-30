import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function GlobalSearch() {
  return (
    <div className="flex flex-row gap-2 justify-between items-stretch dark:bg-slate-800 bg-slate-300 rounded-md max-lg:hidden w-full max-w-[600px] px-3">
      <Image
        src="/assets/icons/search.svg"
        alt="global-search-icon"
        width={23}
        height={23}
      />
      <Input
        placeholder="Search anything..."
        className="shadow-none border-none bg-inherit no-focus outline-none dark:text-white"
      ></Input>
    </div>
  );
}
