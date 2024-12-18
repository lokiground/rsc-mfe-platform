declare module "http://localhost:3001/products-app" {
  export interface Product {
    id: string;
    name: string;
    price: number;
  }

  export function ProductList(): JSX.Element;
}

declare module "http://localhost:3001/dist/products-app.js" {
  export interface Product {
    id: string;
    name: string;
    price: number;
  }

  export function ProductList(): JSX.Element;
}
