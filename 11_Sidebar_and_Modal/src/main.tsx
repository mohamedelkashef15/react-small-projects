import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./index.css";
import { StrictMode } from "react";
import { AppProvider } from "./Context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
