import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Sports leagues",
          "Reality shows",
          "Events and award shows",
          "Corporate Films and commercials",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        delay: 10,
      }}
    />
  );
}

export default Type;
