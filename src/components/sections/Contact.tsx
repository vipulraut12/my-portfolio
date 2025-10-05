export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        scrollMarginTop: "80px",
        padding: "4rem 2rem",
        background: "#f8f9fa",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "2.5rem",
          marginBottom: "1rem",
        }}
      >
        Contact
      </h2>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#555",
          maxWidth: "600px",
          margin: "0 auto 2rem",
          lineHeight: 1.8,
        }}
      >
        I’m always open to new opportunities and collaborations.  
        Feel free to reach out if you’d like to connect or work together.
      </p>

      {/* Email button */}
      <a
        href="vsraut1234@gmail.com" // ← change this to your real email
        style={{
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          background: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px",
          fontSize: "1rem",
          fontWeight: 500,
          transition: "background 0.3s ease",
        }}
        onMouseEnter={(e) =>
          ((e.target as HTMLAnchorElement).style.background = "#0056b3")
        }
        onMouseLeave={(e) =>
          ((e.target as HTMLAnchorElement).style.background = "#007bff")
        }
      >
        Email Me
      </a>

      {/* Social Links */}
      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1.5rem" }}>
        <a
          href="https://github.com/vsraut"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#333", fontSize: "1.2rem", textDecoration: "none" }}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#333", fontSize: "1.2rem", textDecoration: "none" }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
