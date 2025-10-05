export default function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
  ];

  return (
    <section
      id="skills"
      style={{
        scrollMarginTop: "80px",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "1rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            style={{
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              fontWeight: 500,
              color: "#333",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
