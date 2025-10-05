import avatar from "../../assets/avatar.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        scrollMarginTop: "80px",
        minHeight: "90vh",
        display: "flex",
        flexWrap: "wrap", // allows stacking on small screens
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "linear-gradient(135deg, #f9fafb 0%, #e9ecef 100%)",
      }}
    >
      {/* ---- LEFT: Animated Name + Tagline ---- */}
      <div
        style={{
          flex: "1 1 300px",
          textAlign: "center",
        }}
      >
        {/* Name lines */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3.5rem)", // responsive size
            margin: "0.3rem 0",
            animation: "fadeSlideIn 0.8s ease forwards",
            animationDelay: "0s",
            opacity: 0,
          }}
        >
          VIPUL
        </h1>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            margin: "0.3rem 0",
            animation: "fadeSlideIn 0.8s ease forwards",
            animationDelay: "0.6s",
            opacity: 0,
          }}
        >
          SURESH
        </h1>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            margin: "0.3rem 0",
            animation: "fadeSlideIn 0.8s ease forwards",
            animationDelay: "1.2s",
            opacity: 0,
          }}
        >
          RAUT
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            color: "#555",
            marginTop: "1rem",
            opacity: 0,
            animation: "fadeSlideIn 0.8s ease forwards",
            animationDelay: "2s",
          }}
        >
          Full Stack Developer
        </p>
      </div>

      {/* ---- RIGHT: Avatar ---- */}
      <div
        style={{
          flex: "1 1 250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <img
          src={avatar}
          alt="Vipul Suresh Raut"
          style={{
            width: "min(250px, 60vw)", // responsive image size
            height: "min(250px, 60vw)",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      {/* ---- Inline CSS animation ---- */}
      <style>
        {`
          @keyframes fadeSlideIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}
