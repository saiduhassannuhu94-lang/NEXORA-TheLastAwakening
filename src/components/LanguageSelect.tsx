type Props = {
  onSelect: (lang: "en" | "ha") => void;
};

export default function LanguageSelect({ onSelect }: Props) {
  return (
    <div
      style={{
        height: "100vh",
        background: "#020617",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1>Select Language</h1>

      <button
        style={{
          margin: 10,
          padding: "15px 40px",
          fontSize: "18px",
        }}
        onClick={() => onSelect("en")}
      >
        🇺🇸 English
      </button>

      <button
        style={{
          margin: 10,
          padding: "15px 40px",
          fontSize: "18px",
        }}
        onClick={() => onSelect("ha")}
      >
        🇳🇬 Hausa
      </button>
    </div>
  );
          }
