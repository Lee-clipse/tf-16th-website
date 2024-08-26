/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <CookiesProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </CookiesProvider>
);
