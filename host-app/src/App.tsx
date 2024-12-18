import React, { lazy, Suspense } from "react";
import { Cart } from "./components/Cart";

// Alternative avec un import plus propre
const importProductList = async () => {
  try {
    const module = await import("http://localhost:3001/products-app");
    return { default: module.ProductList };
  } catch (error) {
    console.error("Failed to load ProductList:", error);
    throw error;
  }
};

const ProductList = lazy(importProductList);

function App() {
  return (
    <div className="app">
      <header>
        <h1>Our Store</h1>
      </header>
      <div className="container">
        <div className="products">
          <Suspense fallback={<div>Loading Products...</div>}>
            <ErrorBoundary
              fallback={<div>Error loading products component</div>}
            >
              <ProductList />
            </ErrorBoundary>
          </Suspense>
        </div>
        <div className="cart-container">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;

// Composant ErrorBoundary pour gérer les erreurs de chargement
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error("Error loading component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
