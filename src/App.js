import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Happy & Shy",
  "✔": "Correct",
  "😂": "Smiling Face",
  "😔": "Sad Face",
  "😪": "Sleepy Face",
  "🤤": "Smart Face",
  "😴": "Sleeping Face"
};

var Emojisweknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");
  function emojiInputHandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];

    if (meaning === undefined) {
      meaning = "Sorry Not Present in Database";
    }

    setmeaning(meaning);
  }
  function EmojiclickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "green" }}>Emoji Translator </h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning}</h2>
      <h3> Emoji's We Know </h3>

      {Emojisweknow.map(function (Emoji) {
        return (
          <span
            onClick={() => EmojiclickHandler(Emoji)}
            style={{ fontSize: "1.9rem", cursor: "pointer" }}
            key={Emoji}
          >
            {Emoji}
          </span>
        );
      })}
    </div>
  );
}
