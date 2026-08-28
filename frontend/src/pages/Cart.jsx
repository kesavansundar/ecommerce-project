import { FiArrowRight, FiMinus, FiPlus, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import { useCart } from "../contexts/CartContext";

function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

function Cart() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useCart();
  const shipping = cartTotal >= 3000 || cartTotal === 0 ? 0 : 99;
  const total = cartTotal + shipping;

  return (
    <>
      <Navbar />
      <main className="cart-page">
        <BackButton />
        <header className="cart-heading">
          <div>
            <span className="cart-kicker"><FiShoppingBag /> YOUR BAG</span>
            <h1>Ready when you are.</h1>
            <p>Review your picks and make them yours.</p>
          </div>
          <span className="cart-item-count">{cart.length} {cart.length === 1 ? "item" : "items"}</span>
        </header>

        {cart.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-cart-icon"><FiShoppingBag /></div>
            <h2>Your cart is waiting</h2>
            <p>Good things are only a few clicks away.</p>
            <Link to="/products" className="cart-primary-btn">Start shopping <FiArrowRight /></Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items" aria-label="Cart items">
              {cart.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <span>{item.category}</span>
                    <h2>{item.name}</h2>
                    <strong>{formatPrice(item.price)}</strong>
                    <div className="cart-item-actions">
                      <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                        <button type="button" aria-label={`Decrease ${item.name}`} onClick={() => updateQuantity(item.id, item.quantity - 1)}><FiMinus /></button>
                        <span>{item.quantity}</span>
                        <button type="button" aria-label={`Increase ${item.name}`} onClick={() => updateQuantity(item.id, item.quantity + 1)}><FiPlus /></button>
                      </div>
                      <button type="button" className="cart-remove" onClick={() => removeFromCart(item.id)}><FiTrash2 /> Remove</button>
                    </div>
                  </div>
                  <strong className="cart-line-total">{formatPrice(item.price * item.quantity)}</strong>
                </article>
              ))}
              <Link to="/products" className="continue-shopping"><FiArrowRight /> Continue shopping</Link>
            </section>

            <aside className="cart-summary">
              <span className="cart-kicker">ORDER SUMMARY</span>
              <h2>A little joy, on its way.</h2>
              <div className="summary-row"><span>Subtotal</span><strong>{formatPrice(cartTotal)}</strong></div>
              <div className="summary-row"><span>Shipping</span><strong>{shipping === 0 ? "Free" : formatPrice(shipping)}</strong></div>
              {shipping > 0 && <p className="shipping-note">Add {formatPrice(3000 - cartTotal)} more for free shipping.</p>}
              <div className="summary-total"><span>Total</span><strong>{formatPrice(total)}</strong></div>
              <button type="button" className="checkout-btn">Checkout <FiArrowRight /></button>
              <p className="secure-note">Secure checkout · Easy 30-day returns</p>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}

export default Cart;