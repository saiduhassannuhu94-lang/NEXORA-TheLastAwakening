import { useState } from "react";

type Props = {
  onFinish: (playerName: string, gender: "male" | "female") => void;
};

export default function CharacterCreation({ onFinish }: Props) {
  const [playerName, setPlayerName] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");

  return (
    <div
      style={{
        height: "100vh",
        background: "#07101f",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
      }}
    >
      <h1>Create Your Character</h1>

      <input
        placeholder="Player Name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        style={{
          padding: "15px",
          width: 300,
          fontSize: 18
        }}
      />

      <div>
        <button
          onClick={() => setGender("male")}
          style={{
            marginRight: 10,
            padding: "12px 30px"
          }}
        >
          👦 Male
        </button>

        <button
          onClick={() => setGender("female")}
          style={{
            padding: "12px 30px"
          }}
        >
          👧 Female
        </button>
      </div>

      <h3>Selected: {gender}</h3>

      <button
        onClick={() =>
          onFinish(
            playerName || "Explorer",
            gender
          )
        }
        style={{
          marginTop: 20,
          padding: "15px 40px",
          fontSize: 20
        }}
      >
        Begin Journey
      </button>
    </div>
  );
}
