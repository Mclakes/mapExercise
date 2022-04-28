import React from "react";
import Card from "./Card.jsx";
import emojipedia from "../emojipedia.js";

function CreateCard(spelling) {
  return (
    <Card
      key={spelling.id}
      emoji={spelling.emoji}
      name={spelling.name}
      meaning={spelling.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateCard)}</dl>
    </div>
  );
}

export default App;
