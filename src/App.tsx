import { useState } from "react";
import MainMenu from "./components/MainMenu";
import LanguageSelect from "./components/LanguageSelect";

type Screen = "menu" | "language" | "game";

export default function App() {
  const [screen, setScreen] = useState<Screen>("menu");
  const [language, setLanguage] = useState<"en" | "ha">("en");

  if (screen === "menu") {
    return (
      <MainMenu
        onNewGame={() => setScreen("language")}
      />
    );
  }

  if (screen === "language") {
    return (
      <LanguageSelect
        onSelect={(lang) => {
          setLanguage(lang);
          setScreen("game");
        }}
      />
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        background: "#000",
        color: "#00e5ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial",
      }}
    >
      <h1>Welcome to NEXORA</h1>

      <h2>
        Language: {language === "ha" ? "Hausa 🇳🇬" : "English 🇺🇸"}
      </h2>
    </div>
  );
          }
