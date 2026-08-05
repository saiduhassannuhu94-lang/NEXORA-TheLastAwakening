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
          color: "#00e5ff",
          margin: 0,
        }}
      >
        NEXORA
      </h1>

      <h2>The Last Awakening</h2>

      <button
        style={{
          marginTop: "30px",
          padding: "15px 35px",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        ▶ Start Game
      </button>
    </div>
  );
          }
