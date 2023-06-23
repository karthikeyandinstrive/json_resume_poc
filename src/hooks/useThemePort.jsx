import { useContext } from "react";
import { ColorModeContext } from "../context/ThemeProvider";

const useThemePort = () => {
  const colorMode = useContext(ColorModeContext);
  return colorMode;
};

export default useThemePort;
