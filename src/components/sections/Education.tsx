export default function Education() {
  return (
    <section
      id="education"
      style={{
        scrollMarginTop: "80px",
        padding: "4rem 2rem",
        background: "#f8f9fa",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Education
        </h2>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ margin: 0 }}>CDAC ACTS Pune</h3>
          <p style={{ margin: "0.2rem 0", color: "#555" }}>
            PG-DAC | 2025
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ margin: 0 }}>Progressive Education Society's Modern College of Engineering</h3>
          <p style={{ margin: "0.2rem 0", color: "#555" }}>
            B.E. in Electronics and Computer Engineering | 2024
          </p>
        </div>
      </div>
    </section>
  );
}
