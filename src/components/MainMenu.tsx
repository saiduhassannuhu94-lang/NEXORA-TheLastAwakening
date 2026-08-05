type Props = {
  onNewGame: () => void;
};

export default function MainMenu({ onNewGame }: Props) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#050816",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          color: "#00e5ff",
          marginBottom: "10px",
        }}
      >
        NEXORA
      </h1>

      <h2 style={{ marginBottom: "40px" }}>
        The Last Awakening
      </h2>

      <button onClick={onNewGame}>
        ▶ New Game
      </button>

      <button style={{ marginTop: 15 }}>
        Continue
      </button>

      <button style={{ marginTop: 15 }}>
        Settings
      </button>

      <button style={{ marginTop: 15 }}>
        Exit
      </button>
    </div>
  );
            }
