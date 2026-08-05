import { useEffect, useState } from "react";

type Props = {
  language: "en" | "ha";
  onFinish: () => void;
};

export default function Intro({ language, onFinish }: Props) {
  const english = [
    "Long ago...",
    "The Core Crystal shattered...",
    "Twenty Ancient Gates were sealed...",
    "Darkness consumed the world...",
    "Only one Explorer can awaken the light..."
  ];

  const hausa = [
    "Tun shekaru masu yawa da suka wuce...",
    "Babban Crystal ya tarwatse...",
    "An rufe Ƙofofi Ashirin na Tsohuwar Duniya...",
    "Duhu ya mamaye duniya...",
    "Kai ne za ka dawo da haske..."
  ];

  const lines = language === "ha" ? hausa : english;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= lines.length) {
      const timer = setTimeout(onFinish, 2000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIndex((i) => i + 1);
    }, 2500);

    return () => clearTimeout(timer);
  }, [index, lines, onFinish]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "34px",
        textAlign: "center",
        padding: "30px",
      }}
    >
      {index < lines.length ? lines[index] : "Loading..."}
    </div>
  );
         }
