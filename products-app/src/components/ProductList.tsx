// products-app/src/components/ProductList.tsx

interface Product {
  id: string;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: "1", name: "Product 1", price: 100 },
  { id: "2", name: "Product 2", price: 200 },
];

export function ProductList() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => console.log(`Add to cart: ${product.id}`)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
