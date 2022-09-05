import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Detail() {
  const { selTheme } = useContext(ThemeContext);

  return (
    <p
      className="display-6 text-center "
      style={{
        color: selTheme.foreground,
      }}
    >
      light theme activated
    </p>
  );
}
