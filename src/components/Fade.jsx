import React, { useEffect, useState } from "react";

export function Fade() {
  const [currPhrase, setCurrPharse] = useState([]);
  const phrases = [
    "Hello, my name is Ania.",
    "I love to code.",
    "I love to teach.",
  ];
  let i = 0;
  let j = 0;
  let currentPhrase = [];
  let isDeleting = false;
  let isEnd = false;

  useEffect(() => {
    function loop() {
      isEnd = false;
      currentPhrase.join("");

      if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j]);
          j++;
          setCurrPharse(currentPhrase.join(""));
        }

        if (isDeleting && j <= phrases[i].length) {
          currentPhrase.pop(phrases[i][j]);
          j--;
          setCurrPharse(currentPhrase.join(""));
        }

        if (j === phrases[i].length) {
          isEnd = true;
          isDeleting = true;
        }

        if (isDeleting && j === 0) {
          currentPhrase = [];
          isDeleting = false;
          i++;
          if (i === phrases.length) {
            i = 0;
          }
        }
      }
      const spedUp = Math.random() * (80 - 50) + 50;
      const normalSpeed = Math.random() * (300 - 200) + 200;
      const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
      setTimeout(loop, time);
    }

    loop();
  }, []);

  return <div id="text">{currPhrase}</div>;
}
