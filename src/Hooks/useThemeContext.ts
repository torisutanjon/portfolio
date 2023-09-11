import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeProvider";

const useThemeContext = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return { isDark, setIsDark };
};

export default useThemeContext;
