// products-app/src/index.tsx
import { ProductList } from "./components/ProductList";

export { ProductList };

// Pour le développement standalone
if (import.meta.env.DEV) {
  import("./dev").then(({ mount }) => mount());
}
