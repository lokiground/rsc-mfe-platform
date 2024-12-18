import { useCartStore } from "../store/cart";

export function Cart() {
  const { items, removeItem } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div>Total: ${total}</div>
        </>
      )}
    </div>
  );
}
