// //without autoplay
// import React, { useState, useEffect } from "react";

// const AudioPlayer = ({ base64Audio }) => {
//   const [audio, setAudio] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     if (base64Audio) {
//       const audioSrc = `data:audio/wav;base64,${base64Audio}`;
//       const audioInstance = new Audio(audioSrc);
//       setAudio(audioInstance);
//     }
//   }, [base64Audio]);

//   const togglePlayPause = () => {
//     if (audio) {
//       if (isPlaying) {
//         audio.pause();
//       } else {
//         audio.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={togglePlayPause}
//         className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-full"
//       >
//         {isPlaying ? "Pause" : "Play"}
//       </button>
//     </div>
//   );
// };

// export default AudioPlayer;

import React, { useEffect, useRef } from "react";

const AudioPlayer = ({ base64Audio }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (base64Audio) {
      const audioSrc = `data:audio/wav;base64,${base64Audio}`;
      audioRef.current = new Audio(audioSrc);

      audioRef.current.oncanplaythrough = () => {
        audioRef.current.play().catch((error) => {
          console.error("Auto-play failed:", error);
          // You might want to add some user-facing error handling here
        });
      };

      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.src = "";
        }
      };
    }
  }, [base64Audio]);

  return null; // No visible UI elements
};

export default AudioPlayer;
