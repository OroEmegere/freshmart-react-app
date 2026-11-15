import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name}
        onError={(e) => { e.target.src = `https://placehold.co/100x100/dff3e4/1b7a3d?text=${encodeURIComponent(item.name)}`; }} />
      <div className="cart-info">
        <h4>{item.name}</h4>
        <p>₦{item.price.toLocaleString()}</p>
      </div>
      <div className="qty">
        <button onClick={() => updateQuantity(item.id, -1)}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
      </div>
      <p className="line-total">₦{(item.price * item.quantity).toLocaleString()}</p>
      <button className="remove" onClick={() => removeFromCart(item.id)}>✕</button>
    </div>
  );
}

export default CartItem;