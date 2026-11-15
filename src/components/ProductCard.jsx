import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  const fallback = `https://placehold.co/400x300/dff3e4/1b7a3d?text=${encodeURIComponent(product.name)}`;

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        onError={(e) => { e.target.src = fallback; }}
      />
      <span className="tag">{product.category}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">₦{product.price.toLocaleString()}</p>
      <button className="btn" onClick={handleAdd}>
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
