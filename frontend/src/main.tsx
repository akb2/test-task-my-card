import { RouterComponent } from "@components/core/RouterComponent";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.scss";
import { isDefined } from "@akb2/types-tools";

const rootElement = document.getElementById("root");

if (!isDefined(rootElement)) {
  throw new Error('Root element "#root" not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterComponent />
  </StrictMode>,
);
