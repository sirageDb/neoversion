import React, { useState } from "react";
import Neoversion from "./lib";
import icon from "./partyIcon.png";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const visibilityHandler = () => {
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
        customIcon={{icon : icon, iconAlt : "This is icon alt"}}
        button={{
          text: "Close",
          scrollToBottom: true,
          remember: {reference : "5"},
          callback: () => visibilityHandler(),
          sticky: false,
          mandatoryCheck: {
            text: "I consent etc...",
            errorText: "error, please check ... ",
          },
        }}
        content = {`volutpat. Quisque vitae lectus ut leo faucibus faucibus. Donec vestibulum mi nec dui hendrerit, in pharetra tellus finibus. Maecenas ligula eros, mollis sed libero et, congue tincidunt justo. Duis volutpat mollis rutrum. Curabitur iaculis quam at dui suscipit scelerisque. Praesent semper mi est. Maecenas fringilla mollis enim, at maximus nunc.`}
      />
    </div>
  );
}

export default App;
