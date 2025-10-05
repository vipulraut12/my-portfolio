import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        scrollMarginTop: "80px",
        padding: "4rem 2rem",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "#fafafa",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
          textAlign: "left",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 10px 20px rgba(0,0,0,0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 6px 15px rgba(0,0,0,0.08)";
        }}
      >
        <h3 style={{ fontSize: "1.8rem", margin: "0 0 0.5rem" }}>
          Alumni Networking Platform
        </h3>
        <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.7, marginBottom: "1rem" }}>
          A web-based platform to connect alumni with current students for mentorship,
          opportunities, and collaboration.
        </p>

        {/* Tech Stack */}
        <p style={{ fontWeight: 600, margin: "0.5rem 0" }}>
          Tech Stack: <span style={{ fontWeight: 400 }}>
            Java, Hibernate, MySQL, Servlets, React.js, Bootstrap, Spring Boot
          </span>
        </p>

        {/* Key Features / Contributions */}
        <ul style={{ color: "#555", lineHeight: 1.8, marginLeft: "1.2rem", marginBottom: "1rem" }}>
          <li>Implemented secure user authentication with login/registration, session tracking, and input validation.</li>
          <li>Designed and integrated a MySQL database to manage user data, posts, and communication features.</li>
          <li>Developed backend business logic and optimized database queries for performance.</li>
          <li>Built responsive, user-friendly frontend interfaces using React.js and Bootstrap.</li>
          <li>Focused on delivering a seamless experience for alumni and current students.</li>
        </ul>

        {/* CTA button */}
        <Link
          to="/alumni"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.6rem 1.2rem",
            background: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontSize: "0.95rem",
            fontWeight: 500,
          }}
        >
          View Project
        </Link>
      </div>
    </section>
  );
}
