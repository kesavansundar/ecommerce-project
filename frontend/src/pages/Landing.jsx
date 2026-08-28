import { Link } from "react-router-dom";

function Landing() {
  return (
    <main className="landing-page">

      {/* Landing Navbar */}
      <header className="landing-navbar">
        <div className="container landing-nav-container">
          <Link to="/" className="landing-logo">
            <span className="logo-mark">S</span>
            Shop<span>Hub</span>
          </Link>

          <div className="landing-nav-actions">
            <Link to="/login" className="landing-login">
              Login
            </Link>
            <Link to="/register" className="landing-register">
              Get Started ↗
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="landing-hero">
        <div className="container landing-grid">
          <div className="landing-content">
            <p className="eyebrow">
              <span className="eyebrow-dot"></span>
              A better way to shop
            </p>

            <h1>
              Everything you love.
              <br />
              <em>All in one place.</em>
            </h1>

            <p className="landing-description">
              Discover thoughtfully selected products, everyday essentials,
              and new favorites — all brought together for a simpler,
              more enjoyable shopping experience.
            </p>

            <div className="landing-buttons">
              <Link to="/register" className="hero-primary-btn">
                Start Shopping <span>↗</span>
              </Link>

              <Link to="/categories" className="hero-secondary-btn">
                Browse Categories
              </Link>
            </div>

            <div className="landing-trust">
              <span>✦ Secure shopping</span>
              <span>✦ Easy returns</span>
              <span>✦ Fast delivery</span>
            </div>
          </div>

          <div className="landing-visual">
            <div className="landing-image">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=90"
                alt="Shopping collection"
              />
            </div>

            <div className="landing-card">
              <span>01</span>
              <div>
                <strong>Curated for you</strong>
                <p>Quality products, better choices.</p>
              </div>
            </div>

            <div className="landing-sticker">
              shop
              <br />
              <em>better</em>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="landing-features">
        <div className="container">
          <div className="landing-feature-grid">
            <div>
              <span>01</span>
              <h3>Curated Selection</h3>
              <p>
                Our expert team handpicks every product. Quality and value are guaranteed.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Secure & Protected</h3>
              <p>
                Your account and transactions are protected with industry-leading security.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Seamless Experience</h3>
              <p>
                Simple navigation, quick checkout, and hassle-free returns.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Landing;