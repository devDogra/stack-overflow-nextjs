"use client";

import ThemeContext from "./ThemeContext";
import React, { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

  colorScheme.addEventListener("change", (e) => {
    handleThemeChange();
    console.log("changing");
  });

  const lstheme = localStorage.getItem("theme");

  const def = lstheme || (colorScheme.matches ? "dark" : "light") || "light";

  const [mode, setMode] = useState(def);

  console.log({ mode, colorScheme: colorScheme.matches, def, lstheme });

  function handleThemeChange() {
    console.log("mode is = ", mode);
    localStorage.setItem("theme", mode);

    const prefersDark = colorScheme.matches;
    const applyDark = mode === "dark" || (mode === "system" && prefersDark);

    if (!applyDark) {
      //   This is how tailwind detects light/dark mode V
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }

  // colorScheme not needed; but linter complaining -_-
  useEffect(handleThemeChange, [mode, colorScheme]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
