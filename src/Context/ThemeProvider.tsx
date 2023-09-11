import { useState, createContext, Dispatch } from "react";

interface ThemeTypes {
  isDark: boolean;
  setIsDark: Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeTypes>({
  isDark: false,
  setIsDark: () => {},
});

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
