import React, { useEffect } from "react";
import { toggleDarkMode, useSubScribeDarkMode } from "../../../state/page/drak";

export default function Btn() {
  const { value } = useSubScribeDarkMode();
  useEffect(() => {
    const html = document.querySelector("html");
    value === "dark"
      ? html?.classList.add("dark")
      : html?.classList.remove("dark");
  }, [value]);
  return (
    <div style={{ width: 400, margin: 10 }}>
      <div className="flex-auto flex space-x-3">
        <button
          className={
            value === "dark"
              ? "w-1/2 flex items-center justify-center rounded-md bg-black text-white"
              : "w-1/2 flex items-center justify-center rounded-md border border-gray-300"
          }
          type="submit"
          onClick={toggleDarkMode}
        >
          Change To {value === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}
