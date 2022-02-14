import React, { useState } from "react";
import Neoversion from "./lib";
import icon from "./partyIcon.png";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ok = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open overlay
      </button>
      lso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum.is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
      tware like Aldus PageMaker including versions of Lorem Ipsum.
      <Neoversion
        isOpen={isOpen}
        title="Icon"
        customIcon={{icon : icon, iconAlt : "This is icon alt"}}
        button={{
          text: "Close",
          scrollToBottom: true,
          remember: {reference : "4"},
          callback: () => ok(),
          sticky: false,
          mandatoryCheck: {
            text: "Je certifie avoir lu et j'acceppte les conditions générales d'utilisation de cette application de merde",
            errorText: "Merci d'accepter les confition générales d'utilisations",
          },
        }}
      />
    </div>
  );
}

export default App;
