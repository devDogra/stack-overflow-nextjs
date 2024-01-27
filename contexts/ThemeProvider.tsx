"use client";

import ThemeContext from "./ThemeContext";
import React, { useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState("light");

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      //   This is how tailwind detects light/dark mode V
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setMode("light");
    }
  }

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
