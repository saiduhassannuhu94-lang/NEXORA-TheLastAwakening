export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom, #030712, #0f172a)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          margin: 0,
          color: "#00e5ff",
          letterSpacing: "6px",
        }}
      >
        NEXORA
      </h1>

      <h2
        style={{
          fontWeight: 300,
          marginTop: "10px",
        }}
      >
        The Last Awakening
      </h2>

      <p
        style={{
          marginTop: "25px",
          opacity: 0.8,
        }}
      >
        Version 0.1.0 Alpha
      </p>

      <button
        style={{
          marginTop: "40px",
          padding: "15px 40px",
          fontSize: "20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        ▶ Start Game
      </button>
    </div>
  );
          }
