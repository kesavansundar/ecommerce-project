import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      navigate("/login");

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
            <p className="auth-eyebrow">JOIN SHOPHUB</p>

            <h1>
              Your next
              <br />
              <em>favorite thing.</em>
            </h1>

            <p>
              Create an account and get access to a simpler, smarter shopping experience.
            </p>
          </div>

          <div className="auth-intro-footer">
            <span>✦ Discover</span>
            <span>✦ Save</span>
            <span>✦ Shop</span>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="auth-form-section">
          <Link to="/" className="auth-back-btn">
            ← Back
          </Link>
          <div className="auth-form-box">
            <div className="auth-heading">
              <p>CREATE ACCOUNT</p>
              <h2>Get started</h2>
              <span>Create your account in a few simple steps.</span>
            </div>

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

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
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-checkbox">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  I agree to the terms and conditions
                </label>
              </div>

              <button
                type="submit"
                className="auth-submit-btn"
                disabled={loading}
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>

            <div className="auth-toggle">
              Already have an account?{" "}
              <Link to="/login">Sign in here</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
