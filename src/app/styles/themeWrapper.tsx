"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "./globalStyles";

const ThemeWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
