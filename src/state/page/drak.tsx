import { generateSubScribe } from "../hooks/useSubScribe";
export type DrakMode = "dark" | "light";
export const {
  useSubScribe: useSubScribeDarkMode,
  dispatch: dispatchDarkMode,
} = generateSubScribe<DrakMode>("light");
export const toggleDarkMode = (): void => {
  dispatchDarkMode((d) => (d === "dark" ? "light" : "dark"));
  // dispatchDarkMode("dark");
};
