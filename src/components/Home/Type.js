import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Sports leagues",
          "Reality shows",
          "Adventure, food and travel shows",
          "Production of sports tournaments",
          "Events and Award shows",
          "Corporate Films",
          "Advertising Films",
          "Documentaries",
          "Pre-wedding films and photography",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay: 10,
      }}
    />
  );
}

export default Type;
