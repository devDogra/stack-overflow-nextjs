"use client";
import { useContext } from "react";
import ThemeContext from "@/contexts/ThemeContext";

export default function ThemeConsumer() {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <div className="border-2 bg-slate-50 dark:bg-slate-500">
      {`MODE: ${mode} `}
      <button onClick={toggleMode}>Toggle Mode</button>
    </div>
  );
}
