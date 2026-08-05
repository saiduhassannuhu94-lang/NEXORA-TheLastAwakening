import { useState } from "react";
import MainMenu from "./components/MainMenu";
import LanguageSelect from "./components/LanguageSelect";
import Intro from "./components/Intro";
import CharacterCreation from "./components/CharacterCreation";

type Screen =
  | "menu"
  | "language"
  | "intro"
  | "character"
  | "game";

export default function App() {
  const [screen, setScreen] = useState<Screen>("menu");
  const [language, setLanguage] = useState<"en" | "ha">("en");

  const [playerName, setPlayerName] = useState("Explorer");
  const [gender, setGender] = useState<"male" | "female">("male");

  if (screen === "menu") {
    return (
      <MainMenu onNewGame={() => setScreen("language")} />
    );
  }

  if (screen === "language") {
    return (
      <LanguageSelect
        onSelect={(lang) => {
          setLanguage(lang);
          setScreen("intro");
        }}
      />
    );
  }

  if (screen === "intro") {
    return (
      <Intro
        language={language}
        onFinish={() => setScreen("character")}
      />
    );
  }

  if (screen === "character") {
    return (
      <CharacterCreation
        onFinish={(name, selectedGender) => {
          setPlayerName(name);
          setGender(selectedGender);
          setScreen("game");
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: "100vw",
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
      <h1>🎮 Welcome, {playerName}!</h1>
      <h2>Character: {gender}</h2>
      <h3>Language: {language === "ha" ? "Hausa 🇳🇬" : "English 🇺🇸"}</h3>

      <p style={{ marginTop: 30 }}>
        🚧 Awakening Valley (Level 1) is the next module.
      </p>
    </div>
  );
        }
