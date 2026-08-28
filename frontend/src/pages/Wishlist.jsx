import { FiHeart, FiShoppingCart, FiTrash2 } from "react-icons/fi";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />

      <main className="wishlist-page">
        <BackButton />

        <section className="wishlist-heading">
          <span>
            <FiHeart /> YOUR COLLECTION
          </span>
          <h1>My Wishlist</h1>
          <p>Products you've saved for later.</p>
        </section>

        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <div className="empty-icon">
              <FiHeart />
            </div>
            <h2>Your wishlist is empty</h2>
            <p>Save products you love and find them here later.</p>
          </div>
        ) : (
          <section className="wishlist-grid">
            {wishlist.map((product) => (
              <div className="wishlist-card" key={product.id}>
                <div className="wishlist-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className="wishlist-info">
                  <span>{product.category}</span>
                  <h2>{product.name}</h2>
                  <h3>₹{product.price.toLocaleString("en-IN")}</h3>

                  <div className="wishlist-actions">
                    <button className="add-cart-btn" onClick={() => addToCart(product)}>
                      <FiShoppingCart />
                      Add to Cart
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromWishlist(product.id)}
                      title="Remove from wishlist"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
    </>
  );
}

export default Wishlist;