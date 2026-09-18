import { RouterComponent } from "@components/core/RouterComponent";
import { LayoutComponent } from "@components/layout/LayoutComponent";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element "#root" not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterComponent />
  </StrictMode>,
);
