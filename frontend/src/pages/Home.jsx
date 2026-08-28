import { Link } from "react-router-dom";

const categories = [
  { name: "Home decor", count: "128 items", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=500&q=85" },
  { name: "Daily wear", count: "246 items", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=500&q=85" },
  { name: "Wellness", count: "86 items", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=85" },
  { name: "Accessories", count: "174 items", image: "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=500&q=85" },
];

const products = [
  { name: "Linen market tote", category: "Accessories", price: "$38.00", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=85", tag: "New" },
  { name: "Sculptural table lamp", category: "Home decor", price: "$84.00", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85", tag: "Bestseller" },
  { name: "Everyday crew knit", category: "Daily wear", price: "$64.00", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=85", tag: "New" },
];

const stats = [
  { value: "10K+", label: "Products" },
  { value: "5K+", label: "Happy shoppers" },
  { value: "4.9/5", label: "Average rating" },
];

function Home() {
  return (
    <main className="home">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-dot" /> The edit for everyday living</p>
            <h1>Good things,<br /><em>well chosen.</em></h1>
            <p className="hero-copy">A considered collection of objects, clothing, and small joys made to bring a little more beauty to the everyday.</p>
            <div className="hero-buttons">
              <Link to="/products" className="hero-primary-btn">Shop the collection <span>↗</span></Link>
              <Link to="/categories" className="hero-secondary-btn">Browse categories</Link>
            </div>
            <div className="hero-metrics">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-note"><span>✦</span> Curated with intention · Delivered with care</div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1100&q=90" alt="Warmly styled living room with a sculptural lamp" />
            </div>
            <div className="hero-label"><span>01</span><strong>New season<br />objects</strong><Link to="/products">Explore ↗</Link></div>
            <div className="hero-sticker">made<br /><strong>for living</strong></div>
          </div>
        </div>
      </section>

      <section className="feature-band">
        <div className="container feature-grid">
          <div className="feature-item">
            <div className="feature-icon">🚚</div>
            <div><strong>Free shipping</strong><span>on orders over $75</span></div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✅</div>
            <div><strong>Easy returns</strong><span>within 30 days</span></div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">✦</div>
            <div><strong>Small-batch</strong><span>thoughtfully made</span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip"><div className="container trust-items"><span>Free delivery over $75</span><span>Thoughtful materials</span><span>30-day easy returns</span><span>Small-batch makers</span></div></section>

      <section className="section container">
        <div className="section-heading"><div><p className="eyebrow">Shop by mood</p><h2>Find your next favorite.</h2></div><Link to="/categories" className="text-link">View all categories <span>↗</span></Link></div>
        <div className="category-grid">{categories.map((category) => <Link to="/products" className="category-card" key={category.name}><img src={category.image} alt={category.name} /><div><h3>{category.name}</h3><span>{category.count} <b>↗</b></span></div></Link>)}</div>
      </section>

      <section className="section product-section">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">The latest arrivals</p><h2>Objects with a point of view.</h2></div>
            <Link to="/products" className="text-link">Shop all products <span>↗</span></Link>
          </div>
          <div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}><Link to="/products" className="product-image"><img src={product.image} alt={product.name} /><span className="product-tag">{product.tag}</span><button type="button" aria-label={`Add ${product.name} to wishlist`}>♡</button></Link><div className="product-details"><div><p>{product.category}</p><h3>{product.name}</h3></div><strong>{product.price}</strong></div></article>)}</div>
        </div>
      </section>
    </main>
  );
}

export default Home;