// products-app/src/dev.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ProductList } from "./components/ProductList";

export function mount() {
  const root = document.getElementById("root");
  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <ProductList />
      </React.StrictMode>
    );
  }
}
