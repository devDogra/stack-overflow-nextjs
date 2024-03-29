"use client";

import React, { useContext } from "react";
import Image from "next/image";

import ThemeContext from "@/contexts/ThemeContext";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants";

export default function ThemeButton() {
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="text-black dark:text-white">
          Theme
        </MenubarTrigger>

        <MenubarContent className="bg-light-900 dark:bg-dark-200">
          {themes.map((theme) => (
            <MenubarItem
              key={theme.value}
              onClick={() => setMode(theme.value)}
              className="flex-between flex justify-between"
            >
              <Image
                src={theme.icon}
                alt={theme.value}
                width={20}
                height={20}
              />
              <span
                className={
                  theme.value === mode
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }
              >
                {theme.label}
              </span>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
