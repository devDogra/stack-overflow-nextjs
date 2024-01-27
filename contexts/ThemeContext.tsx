import { createContext } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
  toggleMode: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
