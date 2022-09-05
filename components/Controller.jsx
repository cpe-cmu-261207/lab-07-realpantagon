import React, { useCallback, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Controller() {
  const { toggleTheme, setLightTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <div className="d-flex justify-content-center gap-2">
      {/* <button className="btn btn-secondary" onClick={setLightTheme}>
        Light
      </button>
      <button className="btn btn-dark" onClick={setDarkTheme}>
        Dark
      </button> */}
      <button className="btn btn-primary" onClick={toggleTheme}>
        Toggle
      </button>
    </div>
  );
}
