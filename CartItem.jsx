
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>
        <button onClick={onContinueShopping}>Home</button>
        <button onClick={onContinueShopping}>Plants</button>
        <span>
          Cart ({items.reduce((sum, item) => sum + item.quantity, 0)})
        </span>
      </nav>

      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <div>
          <p>Your shopping cart is empty.</p>
          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {items.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <p>
                  Item Total: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() =>
                    dispatch(updateQuantity({
                      id: item.id,
                      quantity: item.quantity - 1
                    }))
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1
                    }))
                  }
                >
                  +
                </button>

                <button
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <h2>Total Amount: ${total.toFixed(2)}</h2>

          <button onClick={() => alert("Coming Soon!")}>
            Checkout
          </button>

          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </>
      )}
    </div>
  );
}
