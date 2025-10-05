import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.75rem 2rem",
        fontFamily: "'Poppins', sans-serif",
        background: "white",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        animation: "slideDown 0.6s ease forwards", // 👈 animation added
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src={logo}
          alt="Vipul Logo"
          style={{ height: "40px", borderRadius: "8px" }}
        />
      </Link>

      {/* Navigation links */}
      <div style={{ display: "flex", gap: "1.5rem", fontWeight: 500 }}>
        <a
          href="#projects"
          style={{
            textDecoration: "none",
            color: "#333",
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          style={{
            textDecoration: "none",
            color: "#333",
          }}
        >
          Contact
        </a>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes slideDown {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </nav>
  );
}
