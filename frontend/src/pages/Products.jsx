import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiSearch } from "react-icons/fi";
import Navbar from '../components/Navbar';
import BackButton from "../components/BackButton"; 
import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 3499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Shoes",
    price: 2999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 4,
    name: "Casual T-Shirt",
    category: "Fashion",
    price: 999,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 5,
    name: "Leather Backpack",
    category: "Accessories",
    price: 1799,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
  {
    id: 6,
    name: "Sunglasses",
    category: "Accessories",
    price: 1299,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
  {
    id: 7,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 1599,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
  {
    id: 8,
    name: "Hoodie",
    category: "Fashion",
    price: 1499,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
  },
];

function Products() {
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All";
  const [category, setCategory] = useState(selectedCategory);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const categories = ["All", ...new Set(products.map((product) => product.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
    <Navbar/>
    <div className="products-page">
      <BackButton/>
      <div className="products-header">
        <div>
          <h1>Our Products</h1>
          <p>Find the perfect products for you</p>
        </div>

        <div className="search-box">
          <FiSearch />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="category-filter">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <button
                  className={`wishlist-btn ${
                    isInWishlist(product.id) ? "liked" : ""
                  }`}
                  onClick={() => {
                    if (isInWishlist(product.id)) {
                      removeFromWishlist(product.id);
                    } else {
                      addToWishlist(product);
                    }
                  }}
                >
                  <FiHeart
                    fill={isInWishlist(product.id) ? "currentColor" : "none"}
                  />
                </button>
              </div>

              <div className="product-info">
                <span className="product-category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <div className="product-bottom">
                  <span className="product-price">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>

                  <button className="cart-btn" onClick={() => addToCart(product)}>
                    <FiShoppingCart />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try another search or category.</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Products;