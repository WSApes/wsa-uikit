import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#2a6ba8",
  primaryBright: "#2a6ba8",
  primaryDark: "#2a6ba8",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#e8ecf2",
  tertiary: "#EFF4F5",
  text: "#294777",
  textDisabled: "#bbbec1",
  textSubtle: "#43ba58",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#6bb2ff",
  background: "#1a2835",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#111923",
  input: "#41593e",
  primaryDark: "#006da0",
  tertiary: "#333b44",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c4ccd3",
  borderColor: "#495660",
  card: "#25272b",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
