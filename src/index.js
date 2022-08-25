/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-unresolved */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import { ThemeProvider } from "@material-tailwind/react";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { StateContext } from "./context/UpcomingContext";

if (
  process.env.NODE_ENV === "production" &&
  process.env.REACT_APP_LOGROCKET_ID
) {
  LogRocket.init(process.env.REACT_APP_LOGROCKET_ID);
  setupLogRocketReact(LogRocket);
}

export const RootApp = () => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    // getInitialValueInEffect: true,
  });

  const toggleColorScheme = value =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <React.StrictMode>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
          }}
        >
          <ThemeProvider>
            <StateContext>
              <App />
            </StateContext>
          </ThemeProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<RootApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
