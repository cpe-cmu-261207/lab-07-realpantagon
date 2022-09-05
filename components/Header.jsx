import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header() {
  const { selTheme } = useContext(ThemeContext);

  return (
    <p
      className="display-3 text-center"
      style={{
        color: selTheme.foreground,
      }}
    >
      My Site has THEME !!!
    </p>
  );
}
