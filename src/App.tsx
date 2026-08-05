import { useState } from "react";
import MainMenu from "./components/MainMenu";

export default function App() {
  const [screen, setScreen] = useState<"menu" | "game">("menu");

  if (screen === "menu") {
    return (
      <MainMenu
        onNewGame={() => setScreen("game")}
      />
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        color: "#00e5ff",
        fontSize: "40px",
      }}
    >
      Welcome to NEXORA
    </div>
  );
      }
