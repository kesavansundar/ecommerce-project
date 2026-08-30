import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);

      navigate("/home");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-container">
        {/* Left Side - Brand */}
        <div className="auth-intro">
          <Link to="/" className="auth-logo">
            <span>S</span>
            <span>ShopHub</span>
          </Link>

          <div className="auth-intro-content">
            <p className="auth-eyebrow">WELCOME BACK</p>

            <h1>
              Good to see
              <br />
              <em>you again.</em>
            </h1>

            <p>
              Sign in to continue your shopping journey and discover what is waiting for you.
            </p>
          </div>

          <div className="auth-intro-footer">
            <span>✦ Secure</span>
            <span>✦ Simple</span>
            <span>✦ Better</span>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-form-section">
          <Link to="/" className="auth-back-btn">
            ← Back
          </Link>
          <div className="auth-form-box">
            <div className="auth-heading">
              <p>ACCOUNT LOGIN</p>
              <h2>Welcome back</h2>
              <span>Enter your details to access your account.</span>
            </div>

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <div className="password-label">
                  <label htmlFor="password">Password</label>
                  <a href="#forgot">Forgot password?</a>
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-checkbox">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me for next time</label>
              </div>

              <button
                type="submit"
                className="auth-submit-btn"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="auth-toggle">
              Don't have an account?{" "}
              <Link to="/register">Create one now</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
