import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, totalPrice, clearCart } = useCart();
  const [ordered, setOrdered] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setOrdered(true);
  };

  if (ordered) {
    return (
      <section className="page center">
        <h1>🎉 Order placed!</h1>
        <p>Thank you for shopping at FreshMart. Your groceries are on the way.</p>
        <Link to="/products" className="btn">Continue Shopping</Link>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="page center">
        <h1>Your cart is empty</h1>
        <p>Add some fresh items to get started.</p>
        <Link to="/products" className="btn">Browse Products</Link>
      </section>
    );
  }

  return (
    <section className="page">
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cart-total">
        <h2>Total: ₦{totalPrice.toLocaleString()}</h2>
        <button className="btn" onClick={handleCheckout}>Checkout</button>
      </div>
    </section>
  );
}

export default Cart;